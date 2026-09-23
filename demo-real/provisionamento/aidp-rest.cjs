const fs=require('node:fs');
const path=require('node:path');
const common=require('oci-common');
const provider=new common.ConfigFileAuthenticationDetailsProvider(process.env.OCI_CONFIG_FILE,process.env.OCI_PROFILE||'DEFAULT');
const signer=new common.DefaultRequestSigner(provider);
const base=process.env.AIDP_ENDPOINT+'/20260430/aiDataPlatforms/'+encodeURIComponent(process.env.AIDP_OCID);
async function request(method,route,body,extraHeaders={}){
 const selectedBase=route.startsWith('legacy:')?process.env.AIDP_ENDPOINT+'/20240831/dataLakes/'+encodeURIComponent(process.env.AIDP_OCID):base;
 route=route.replace(/^legacy:/,'');
 const url=selectedBase+route.replace('{workspace}',encodeURIComponent(process.env.AIDP_WORKSPACE_KEY));
 const headers=new Headers(extraHeaders);if(!headers.has('accept'))headers.set('accept','application/json');
 const req={uri:url,method,headers};
 if(body!==undefined){req.body=Buffer.isBuffer(body)?body.toString("utf8"):JSON.stringify(body);headers.set('content-type',Buffer.isBuffer(body)?'application/octet-stream':'application/json');}
 await signer.signHttpRequest(req);
 const res=await fetch(url,{method,headers,body:req.body,signal:AbortSignal.timeout(120000)});
 const raw=await res.text();let data;try{data=JSON.parse(raw)}catch{data={text:raw}}
 if(!res.ok)throw new Error(JSON.stringify({status:res.status,data}));
 return {status:res.status,data,asyncKey:res.headers.get('aidp-async-operation-key')};
}
module.exports={request};
if(require.main===module){
 const [method,route,input,output]=process.argv.slice(2);
 request(method,route,input?JSON.parse(fs.readFileSync(input,'utf8')):undefined).then(r=>{if(output)fs.writeFileSync(output,JSON.stringify(r,null,2));console.log(JSON.stringify(r,null,2))}).catch(e=>{console.error(e.message);process.exitCode=1});
}
