import json
from datetime import datetime, timezone
from pyspark.sql import functions as F
raw = spark.table('default.tdc_courtroom.dc_pagamentos_bronze')
silver = spark.table('default.tdc_courtroom.dc_pagamentos_silver')
gold = silver.groupBy('dia','metodo').agg(F.count('*').alias('tentativas'),F.sum(F.when(F.col('status')=='aprovado',1).otherwise(0)).alias('aprovados'),F.sum(F.when(F.col('status')=='aprovado',F.col('valor')).otherwise(0)).alias('receita')).orderBy('dia','metodo')
gold.write.format('delta').mode('overwrite').saveAsTable('default.tdc_courtroom.dc_pagamentos_gold')
valid = raw.filter(F.col('tentativa_id').isNotNull() & (F.col('valor') > 0) & F.col('metodo').isin('cartao','pix'))
rows=[r.asDict() for r in gold.collect()]
assert len(rows)==4 and sum(float(r['receita']) for r in rows)==153000, 'Agregação não confere com o manifesto do caso'
result={'stage':'gold','generatedAt':datetime.now(timezone.utc).isoformat(),'source':'default.tdc_courtroom.dc_pagamentos_gold','received':raw.count(),'invalid':raw.count()-valid.count(),'duplicates':valid.count()-silver.count(),'valid':silver.count(),'rows':rows,'sample':[r.asDict() for r in raw.orderBy('tentativa_id').limit(5).collect()]}
print('COURTROOM_RESULT:' + json.dumps(result,default=str))
