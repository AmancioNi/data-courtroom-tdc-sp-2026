window.COURTROOM_CONTENT = {
 sources: {
 overview:['Visão geral do Workbench','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/overview-oracle-ai-data-platform.html'],
 features:['Recursos do Workbench','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/features-oracle-ai-data-platform.html'],
 workspace:['Workspaces','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/workspaces.html'],
 catalog:['Master Catalog','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/manage-master-catalog.html'],
 notebook:['Notebooks','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/notebooks.html'],
 compute:['Compute','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/compute.html'],
 workflows:['Workflows','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/workflows.html'],
 tools:['Ferramentas dos agentes','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/agent-flow-tools.html'],
 agents:['Agentes','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/ai-agent-flows.html'],
 knowledge:['Knowledge Bases','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/knowledge-bases.html'],
 guardrails:['Guardrails','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/agent-flow-guardrails.html'],
 monitoring:['Monitoramento de agentes','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/monitor-agent-flows.html'],
 setup:['Pré-requisitos de IA','https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/get-started-oracle-ai-data-platform.html']
 },
 scenes:[
 {id:'entrada',chapter:'O convite',time:'0–1 min',duration:1,art:'tribunal',eyebrow:'UMA MISSÃO. DOZE ETAPAS. TRINTA MINUTOS.',title:'Data Courtroom',subtitle:'O Julgamento da Anomalia',intro:'Você é o júri. Os agentes investigam. As provas precisam explicar o que aconteceu.',concept:'overview',notes:'Convide o público a assumir o júri. Diga que esta versão é uma apresentação interativa local: não chama OCI nem executa modelos. As contas são calculadas no navegador e os documentos são fictícios. Explore uma peça do tribunal e inicie a missão. O roteiro completo soma 30 minutos.'},
 {id:'plataforma',chapter:'Conheça a AIDP',time:'1–4 min',duration:3,art:'arquivo',eyebrow:'ANTES DO CASO · ENTENDA O MUNDO',title:'O que a AIDP faz, afinal?',intro:'A Oracle AI Data Platform reúne recursos para conectar, preparar e governar dados — e usá-los em análises e aplicações de IA.',points:['O Workbench é o ambiente onde a equipe constrói essa jornada.','Um workspace organiza os arquivos e trabalhos de um projeto.','Dados, processamento e modelos têm papéis diferentes.'],case:'No tribunal: AIDP é a estrutura da investigação; o jogo é a interface por onde você a acompanha.',concept:'overview',notes:'Dedique três minutos ao mapa. Clique em Fundação, Engenharia e Agentes, e explique as outras estações em uma frase. AIDP é mais ampla que um chatbot. Workbench é o ambiente de desenvolvimento; workspace organiza um projeto; compute executa trabalho. O catálogo é o inventário governado. A arquitetura exibida é didática, não uma captura do console Oracle.'},
 {id:'caso',chapter:'O caso Aurora',time:'4–6 min',duration:2,art:'tribunal',eyebrow:'MISSÃO 01 · ESCOLHA SUA HIPÓTESE',title:'Mesmas tentativas. Menos receita.',intro:'A loja Aurora teve 1.000 tentativas de compra em cada dia. Mas a receita aprovada caiu de R$ 90 mil para R$ 63 mil.',points:['Cada tentativa vale R$ 100 neste conjunto fictício.','São dois dias completos e comparáveis.','Uma correlação é uma pista; ainda precisamos investigar a causa.'],case:'Registre uma hipótese. Ao final, o júri poderá mudar de ideia com novas evidências.',concept:null,notes:'Peça ao público para votar com os dedos e registre aqui a hipótese predominante, ou use o voto individual em uma demonstração. O controle é local e não contabiliza votos de celulares. Os números vêm de 2.000 registros sintéticos. Não antecipe a causa. Abra “Ver a conta” se necessário.'},
 {id:'fontes',chapter:'Conecte as fontes',time:'6–8 min',duration:2,art:'arquivo',eyebrow:'AIDP EM AÇÃO · INTEGRAÇÃO',title:'As provas estão em lugares diferentes.',intro:'Pedidos e pagamentos são tabelas. Registros de alteração e procedimentos são documentos. A investigação precisa dos dois.',points:['Ingerir traz dados para uma base de trabalho.','Acesso externo consulta uma fonte conectada, quando suportado.','Catálogo e permissões ajudam a organizar esse acesso.'],case:'No nosso desenho: arquivos entram na preparação; os dados aprovados ficam disponíveis em uma fonte relacional e os documentos alimentam a base de conhecimento.',concept:'catalog',notes:'Clique em cada fonte. Compare “Ingerir” e “Acessar na origem” nos pagamentos. Nenhuma opção é universalmente melhor: formato, conector, latência e permissões importam. Não prometer zero-copy para qualquer fonte. A conexão real depende dos conectores e das permissões da tenancy. O botão apenas registra uma decisão local de arquitetura.'},
 {id:'camadas',chapter:'Prepare os dados',time:'8–11 min',duration:3,art:'arquivo',eyebrow:'AIDP EM AÇÃO · LAKEHOUSE',title:'Dado recebido não é dado pronto.',intro:'Lakehouse é uma arquitetura para organizar dados e apoiar análise. Bronze, silver e gold são uma convenção de preparação — não três modelos de IA.',points:['Bronze preserva o que chegou.','Silver corrige tipos, remove duplicações e valida registros.','Gold entrega uma visão pronta para uma pergunta de negócio.'],case:'Nos arquivos deste exercício há 2 duplicatas e 1 registro inválido. Execute as etapas para ver o efeito real nas contagens locais.',concept:'overview',notes:'Comece em Bronze, abra os exemplos com problemas e execute Validar. Silver deve mostrar 2.000 registros válidos, com duas duplicatas removidas e uma linha inválida rejeitada. Agregue para chegar a duas linhas gold. Explique que esta implementação usa JavaScript local para ensinar a transformação; no laboratório AIDP, um notebook Spark faria a preparação. O subconjunto com erros de carga é adicional aos 2.000 registros do caso.'},
 {id:'catalogo',chapter:'Registre as provas',time:'11–13 min',duration:2,art:'arquivo',eyebrow:'AIDP EM AÇÃO · CATÁLOGO E ACESSO',title:'Encontrar é só metade do trabalho.',intro:'O Master Catalog reúne metadados: nomes, estruturas e referências dos ativos. Ele ajuda a equipe a descobrir e governar os dados.',points:['Catalog → schema → ativo organiza o endereço da informação.','Standard catalog organiza ativos geridos na plataforma.','External catalog referencia metadados de uma fonte externa.'],case:'Explore quem responde pelo ativo, de onde ele veio e quem pode consultá-lo. O catálogo não garante sozinho que os dados estejam corretos.',concept:'catalog',notes:'Selecione pagamentos_gold e abra seus metadados. O nome completo ilustrado é aurora_ext.negocio.pagamentos_gold. Compare com o volume de documentos no catálogo standard. Troque o perfil para Visitante e tente consultar. Diga claramente que o bloqueio é uma regra didática no navegador; em produção, a autorização precisa ser aplicada no serviço e na fonte. As permissões da conexão externa também limitam o acesso.'},
 {id:'pipeline',chapter:'Execute o trabalho',time:'13–16 min',duration:3,art:'arquivo',eyebrow:'AIDP EM AÇÃO · NOTEBOOK, COMPUTE, WORKFLOW',title:'Escrever, executar e repetir.',intro:'O notebook contém código e resultados. O compute fornece processamento. O workflow coordena tarefas e suas dependências.',points:['Python e SparkSQL permitem preparar e analisar dados em notebooks.','O workflow pode executar tarefas sob demanda ou em agenda.','Cada execução tem estado e histórico para acompanhamento.'],case:'Monte uma execução do caso. Primeiro valide os dados; depois calcule os indicadores. Observe o que acontece quando a primeira tarefa falha.',concept:'workflows',notes:'Clique nos três termos para distingui-los. Execute o pipeline uma vez com falha ativada: a validação para o fluxo e a agregação não roda. Desative a falha e execute novamente. Os resultados são calculados localmente, e o histórico é real para esta simulação; não são métricas cloud. Uma tarefa de notebook pode virar parte de um job. Referências complementares: Notebooks e Compute.'},
 {id:'sql',chapter:'Interrogue os números',time:'16–19 min',duration:3,art:'agentes',eyebrow:'AIDP EM AÇÃO · AGENTE + FERRAMENTA SQL',title:'O agente pergunta. A ferramenta calcula.',intro:'Um agente combina instruções, modelo e ferramentas. Para este caso, a ferramenta SQL usa uma consulta preparada e recebe parâmetros.',points:['O modelo seleciona a ferramenta e preenche o parâmetro.','A consulta calcula valores verificáveis.','O resultado precisa voltar com período, origem e limites.'],case:'Troque Cartão por Pix e compare as aprovações. É o mesmo SQL, com outro parâmetro. O filtro abaixo executa uma simulação local equivalente.',concept:'tools',notes:'Mostre a diferença entre escrever qualquer SQL livremente e chamar uma consulta parametrizada. Nosso desenho usa Oracle SQL sobre uma fonte relacional por catálogo externo. A documentação possui diferenças entre páginas sobre outros dialetos; não afirmar que todos usam a mesma configuração. Rode Cartão e Pix. Colete E01 apenas depois da consulta. SQL preparado não dispensa autorização nem configuração segura das ferramentas.'},
 {id:'rag',chapter:'Leia os documentos',time:'19–22 min',duration:3,art:'agentes',eyebrow:'AIDP EM AÇÃO · KNOWLEDGE BASE + RAG',title:'Uma resposta precisa de contexto.',intro:'A base de conhecimento prepara documentos para busca. RAG recupera trechos relevantes e os entrega ao agente para responder com contexto.',points:['Ingestão divide documentos em trechos e cria representações vetoriais.','A pergunta recupera trechos por relevância semântica.','A resposta deve permitir conferir documento, trecho e versão.'],case:'Compare uma resposta sem fontes com uma resposta apoiada nos registros do caso. Abra as provas e procure a pista que não coincide com o incidente.',concept:'knowledge',notes:'Este demonstrador usa recuperação pré-definida, não embeddings nem LLM no navegador. Diga que isso ilustra a sequência do RAG. Na AIDP, a base é consultada por uma ferramenta RAG vinculada ao agente. Conhecimento atualizado não exige necessariamente treinar o modelo: os documentos podem ser recuperados como contexto. Abra E02 e pelo menos uma prova de contestação. As fontes fictícias estão disponíveis integralmente no painel de evidências.'},
 {id:'limites',chapter:'Conteste com segurança',time:'22–24 min',duration:2,art:'agentes',eyebrow:'AIDP EM AÇÃO · GOVERNANÇA E OBSERVABILIDADE',title:'Poder investigar não é poder fazer tudo.',intro:'Permissões limitam o acesso. Guardrails tratam conteúdo. Observabilidade permite acompanhar as etapas de execução. São controles diferentes.',points:['O caso usa apenas leitura; o agente não altera pagamentos.','Uma instrução dentro de um documento não vira autorização.','O histórico deve mostrar ferramentas, resultados e falhas.'],case:'Teste uma solicitação permitida e outra fora do escopo. Depois abra o rastro da execução para entender o resultado.',concept:'guardrails',notes:'Os bloqueios são regras locais determinísticas para fins didáticos. Não sugerir que o navegador assegura uma aplicação real. A documentação consultada informa guardrails oferecidos em inglês e configuração explícita de nós; o nosso teste em português não valida o serviço nativo. Permissões e controles de escrita são separados de guardrails de conteúdo. Abra o rastro para mostrar metadados de execução, não raciocínio interno do modelo.'},
 {id:'parecer',chapter:'Julgue as evidências',time:'24–27 min',duration:3,art:'tribunal',eyebrow:'MISSÃO FINAL · REVISE SUA HIPÓTESE',title:'Um parecer tão forte quanto suas provas.',intro:'Revise o voto antes de revelar o parecer. Depois retire uma prova: a conclusão deve reconhecer a lacuna, em vez de inventar certeza.',points:['E01 mostra onde a queda se concentra.','E02 relaciona configuração e erros compatíveis.','E03 e E04 ajudam a testar explicações alternativas.'],case:'R$ 27 mil é a diferença observada, não uma promessa de recuperação. Uma pessoa responsável decide a próxima ação.',concept:'monitoring',notes:'Registrar o segundo voto antes de revelar. O parecer local exige a prova numérica e a prova documental; sem elas, fica inconclusivo. Sem contraprovas, a hipótese de pagamento permanece, mas com ressalvas sobre carga e campanha. Use o controle de recuperação apenas como cenário aritmético, nunca como previsão. A ação recomendada é validar configuração e propor reversão com aprovação humana; nenhuma ação operacional é executada.'},
 {id:'encerramento',chapter:'Leve o mapa com você',time:'27–30 min',duration:3,art:'tribunal',eyebrow:'MISSÃO CONCLUÍDA · CONECTE AS PEÇAS',title:'Agora você sabe o que há por trás do jogo.',intro:'Uma aplicação de IA confiável precisa de contexto de negócio, dados preparados, ferramentas e decisões que possam ser conferidas.',points:['Conecte uma pergunta de negócio às suas fontes.','Escolha a ferramenta certa para cada tipo de prova.','Defina quem pode consultar, recomendar e autorizar.'],case:'Responda ao desafio e abra o resumo da sua investigação. Use os minutos finais para perguntas.',concept:'features',notes:'Faça uma pergunta do quiz se o tempo estiver curto e use o restante para perguntas do público. O relatório exportado contém somente escolhas e resultados locais da simulação. O painel “Como levar para AIDP” lista os pré-requisitos reais sem afirmar que a tenancy já está pronta. Esta apresentação não esgota a plataforma: BI, ciência de dados, compartilhamento e integração empresarial podem ser aprofundados depois.'}
 ],
 concepts:{
 overview:{title:'AIDP, Workbench e workspace',lead:'A plataforma reúne capacidades. O Workbench é o ambiente de desenvolvimento. O workspace organiza o projeto.',body:'Pense numa oficina: o Workbench é onde a equipe trabalha; o workspace guarda os artefatos de uma missão; compute é o processamento usado para executar trabalhos. Notebooks e workflows fazem parte dessa organização.',example:'No caso Aurora, um workspace pode reunir o notebook de preparação, os arquivos do caso e o fluxo de agentes.',source:'workspace'},
 features:{title:'Onde cada peça entra',lead:'Preparação, descoberta, IA e análise fazem parte de uma jornada.',body:'Um modelo interpreta e gera linguagem. Uma ferramenta consulta ou executa uma operação delimitada. O catálogo descreve os ativos. O compute executa cargas de trabalho. A aplicação apresenta o resultado ao usuário.',example:'A animação do tribunal é nossa interface. Não é um recurso nativo da AIDP.',source:'features'},
 catalog:{title:'Catálogo não é só uma lista de arquivos',lead:'É uma organização de metadados e acesso aos ativos.',body:'No standard catalog, você organiza schemas e seus ativos. No external catalog, os metadados refletem uma fonte externa. Um endereço de três partes ajuda a localizar uma tabela: catálogo.schema.tabela.',example:'aurora_ext.negocio.pagamentos_gold identifica uma tabela do nosso desenho ilustrativo. Permissões de catálogo não substituem as limitações da conexão de origem.',source:'catalog'},
 notebook:{title:'Notebook: código junto do resultado',lead:'Um lugar para desenvolver e conferir transformações.',body:'Em vez de separar uma consulta de sua saída, o notebook organiza células de código e seus resultados. No Workbench, Python e SparkSQL ajudam a explorar e preparar dados.',example:'Uma célula remove duplicatas; a seguinte confere a contagem; outra calcula a receita por dia.',source:'notebook'},
 compute:{title:'Compute: quem executa o trabalho',lead:'É o recurso de processamento, não o arquivo de código.',body:'Clusters executam cargas de engenharia, ciência de dados e análise. AI Compute é usado para execução de agentes, conforme a configuração do ambiente.',example:'O notebook define a transformação; o cluster a executa. Um arquivo salvo não significa que uma execução aconteceu.',source:'compute'},
 workflows:{title:'Workflow: repetir com ordem e controle',lead:'Um job reúne tarefas. Cada execução é um job run.',body:'Dependências dizem quando uma tarefa pode começar. Estado e histórico ajudam a encontrar falhas. Parâmetros permitem reutilizar o fluxo com outros valores.',example:'Carregar → validar → agregar. Se a validação falha, nosso exemplo bloqueia a publicação do indicador.',source:'workflows'},
 tools:{title:'Uma ferramenta SQL com um contrato claro',lead:'A consulta é preparada; o agente fornece os parâmetros.',body:'O exemplo usa uma fonte Oracle relacional registrada em catálogo externo. O parâmetro muda entre cartão e Pix; a estrutura da consulta permanece. Assim, o valor exibido pode ser reproduzido.',example:'Um modelo não precisa inventar a receita: recebe as linhas calculadas pela ferramenta e as explica.',source:'tools'},
 knowledge:{title:'RAG: buscar antes de responder',lead:'Trazer o trecho relevante para o contexto da resposta.',body:'A ingestão da base prepara trechos e vetores. Uma ferramenta RAG vinculada ao agente consulta a base. Esse mecanismo é diferente de treinar o modelo com todos os documentos.',example:'Para responder sobre a alteração do cartão, recuperamos o trecho do registro de mudança e o log compatível. Nesta apresentação, Íris consulta a base de conhecimento no AIDP; confira as referências da resposta com os documentos do volume.',source:'knowledge'},
 guardrails:{title:'Três camadas de controle',lead:'Autorização, conteúdo e acompanhamento resolvem problemas distintos.',body:'A documentação AIDP descreve guardrails para conteúdo, prompt injection e informações pessoais. Eles precisam de configuração; o suporte documentado é em inglês. Os bloqueios em português desta apresentação são apenas regras locais.',example:'Bloquear uma escrita depende das permissões e ferramentas disponíveis. Mostrar o rastro ajuda a auditar o que aconteceu, sem revelar raciocínio interno.',source:'guardrails'},
 monitoring:{title:'De onde veio essa conclusão?',lead:'A observabilidade acompanha o caminho de uma execução.',body:'No monitoramento de agentes, traces reúnem etapas, chamadas e resultados. Cada parte do percurso pode ser examinada para entender uma falha ou um resultado.',example:'No exercício, o histórico registra ação, ferramenta, saída e horário do navegador. Não é uma medição de latência do serviço Oracle.',source:'monitoring'}
 },
 stations:[
 {id:'foundation',label:'Fundação',icon:'◇',title:'Dados em uma base organizada',text:'A base de dados sustenta análises e IA. Lakehouse descreve a combinação de armazenamento de dados variados com organização e processamento para uso analítico.',case:'Arquivos recebidos viram tabelas conferidas e indicadores do caso.',source:'overview'},
 {id:'engineering',label:'Engenharia',icon:'⌘',title:'Preparar antes de interpretar',text:'Notebooks definem transformações. Compute executa o código. Workflows coordenam tarefas para que o processo possa ser repetido.',case:'Remover duplicatas antes de calcular a receita.',source:'notebook'},
 {id:'catalog',label:'Catálogo',icon:'▤',title:'Descobrir e governar os ativos',text:'Metadados ajudam a encontrar e entender tabelas e documentos. Permissões determinam o acesso aos recursos.',case:'Saber qual tabela representa o pagamento aprovado e quem pode consultá-la.',source:'catalog'},
 {id:'agents',label:'Agentes',icon:'◎',title:'Conectar modelos a ferramentas',text:'Um fluxo combina agentes e ferramentas para investigar. O modelo usa contexto e resultados das ferramentas para compor uma resposta.',case:'SQL busca números; RAG busca trechos; o supervisor consolida o parecer.',source:'agents'},
 {id:'applications',label:'Aplicações',icon:'↗',title:'Levar a análise até a decisão',text:'O resultado pode apoiar uma aplicação, uma análise de negócio ou um processo. O desenho da experiência depende do problema que você quer resolver.',case:'O tribunal mostra as provas ao júri e pede uma decisão responsável.',source:'overview'}
 ],
 documents:[
 {id:'E02',title:'Registro de alteração e log de pagamento',file:'mudanca-pagamento.txt',version:'1.0',date:'20/09/2026',section:'Seções 1–2',tag:'Configuração',body:'10h00 — A configuração do fluxo de cartão passou da versão cfg-16 para cfg-17. A alteração atingiu o parâmetro de validação de credencial do gateway.\n10h07 — Exemplo de registro: método=cartao; status=falhou; erro=CONFIG_INVALID; config=cfg-17. Os registros adicionais de falha por configuração do caso aparecem após 10h00.\nA equipe deve comparar o comportamento anterior e validar a configuração antes de recomendar reversão.',finding:'Uma alteração antecedeu falhas de cartão com um erro compatível. É uma hipótese forte quando combinada com E01, mas precisa de validação operacional.'},
 {id:'E03',title:'Reconciliação de pedidos e pagamentos',file:'reconciliacao.txt',version:'1.0',date:'20/09/2026',section:'Resumo da carga',tag:'Qualidade',body:'Após excluir duas duplicatas e um registro inválido de transporte, os arquivos contêm 1.000 tentativas válidas no dia 19/09 e 1.000 no dia 20/09. Cada tentativa possui uma referência de pedido e uma tentativa de pagamento. As contagens conferem com os manifests fictícios de origem. Não há atraso de carga no recorte do caso.',finding:'Enfraquece a hipótese de carga incompleta. É uma conferência de integridade, não uma prova isolada da causa da falha.'},
 {id:'E04',title:'Calendário da campanha de aquisição',file:'campanha.txt',version:'1.0',date:'13/09/2026',section:'Vigência',tag:'Contestação',body:'A alteração da campanha entrou em vigor em 13/09/2026. O incidente investigado é de 20/09/2026. Nos dois dias comparados, há 500 tentativas no canal app e 500 no canal web. Não há mudança de volume de tentativas que explique a queda de aprovações no cartão.',finding:'A pista pertence a outra janela e o volume dos canais permaneceu constante. Ainda seria possível investigar outras diferenças fora deste conjunto simplificado.'}
 ],
 quiz:[
 {question:'Quem calcula a receita aprovada neste desenho?',options:['O modelo estima um valor provável.','A ferramenta consulta os dados e devolve o cálculo.','O júri escolhe o número por votação.'],answer:1,explanation:'O modelo pode explicar o resultado; a conta precisa vir de uma operação verificável.'},
 {question:'Para que serve o catálogo?',options:['Garantir que qualquer dado esteja correto.','Guardar somente prompts.','Ajudar a localizar, entender e governar ativos.'],answer:2,explanation:'Qualidade exige validações. O catálogo organiza metadados e acesso.'},
 {question:'Qual é a diferença entre RAG e treinamento?',options:['RAG recupera contexto; não exige retreinar o modelo a cada documento.','RAG é sempre um treinamento completo.','Não há diferença.'],answer:0,explanation:'Na investigação, buscamos o trecho e o usamos na resposta com uma referência verificável.'}
 ]
};
// V3: três personagens e revelação em uma etapa separada de toda votação.
(()=>{
const c=window.COURTROOM_CONTENT;
c.characters=[
 {id:'byte',name:'Byte',role:'Investigador de dados',color:'cyan',image:'assets/byte.png',line:'Uma hipótese é boa. Uma conta conferida é melhor.',detail:'Byte acompanha integração, preparação e consultas. Ele transforma a pergunta do negócio em uma investigação numérica.'},
 {id:'iris',name:'Íris',role:'Investigadora documental',color:'teal',image:'assets/iris.png',line:'Toda prova tem uma origem. Vamos encontrá-la.',detail:'Íris reúne documentos, recupera trechos e examina o contexto. Ela explica catálogo, knowledge base e RAG.'},
 {id:'atlas',name:'Atlas',role:'Supervisor do tribunal',color:'gold',image:'assets/atlas.png',line:'Antes de decidir, vamos testar o que ainda falta.',detail:'Atlas contesta as provas e consolida o parecer. Ele explica limites, rastreabilidade e responsabilidade humana.'}
];
c.scenes[0].eyebrow='TRÊS PERSONAGENS. UMA MISSÃO. TRINTA MINUTOS.';
c.scenes[0].notes='Apresente Byte, Íris e Atlas clicando nos personagens. Esta é uma simulação local, sem conexão OCI. As imagens representam personagens 3D; as ações são interações web. O roteiro soma 30 minutos. As votações nunca revelam correção ou justificativa na mesma tela.';
c.scenes[2].eyebrow='PRIMEIRA DECISÃO · COMO COMEÇAR?';
c.scenes[2].case='Escolha a estratégia inicial. A explicação só aparece na próxima etapa.';
c.scenes[2].notes='Peça que o público escolha uma estratégia para iniciar a investigação. Registre a escolha localmente. Não confirme nem negue nenhuma alternativa. Avance para ver a explicação na próxima etapa. Os números são fictícios; votos de celulares não são coletados.';
c.scenes[3].notes='A abertura desta etapa apresenta a resposta da decisão anterior. Depois explore as fontes. Ingerir e acessar na origem dependem da fonte, conector e permissões. Esta tela registra decisões de arquitetura localmente, sem executar uma conexão cloud.';
const verdict=c.scenes[10];
verdict.id='revelacao'; verdict.chapter='O parecer de Atlas'; verdict.time='25–27 min'; verdict.duration=2;
verdict.eyebrow='RESPOSTA · AS PROVAS SUSTENTAM O PARECER';
verdict.intro='Agora compare a escolha do júri com as provas coletadas. Retire uma evidência e veja como a conclusão precisa mudar.';
verdict.notes='Esta é a etapa posterior à votação. Revele a hipótese sustentada somente aqui. Sem E01 ou E02, o parecer local será inconclusivo. Sem E03 ou E04, apresente ressalvas. A recuperação de receita é apenas um cenário aritmético, não uma previsão.';
const voting={id:'votacao',chapter:'A decisão do júri',time:'24–25 min',duration:1,art:'tribunal',eyebrow:'VOTAÇÃO · AINDA SEM RESPOSTA',title:'Qual hipótese você leva ao julgamento?',intro:'Considere as provas que você reuniu. Escolha uma hipótese para o parecer de Atlas.',points:['Você pode mudar sua escolha enquanto estiver nesta etapa.','Registrar o voto não revela acerto ou erro.','A resposta aparece somente ao avançar.'],case:'Vote e passe à próxima etapa para ouvir o parecer.',concept:null,notes:'Registre a hipótese do júri sem comentar se está correta. A página não apresenta veredito, impacto recuperável ou feedback de correção. Só avançar após um voto.'};
c.scenes.splice(10,0,voting);
c.scenes[12]={id:'desafio',chapter:'Desafio AIDP',time:'27–28 min',duration:1,art:'tribunal',eyebrow:'ÚLTIMA MISSÃO · CONECTE AS PEÇAS',title:'O que você leva deste tribunal?',intro:'Responda a três perguntas rápidas sobre AIDP. As explicações ficam na próxima etapa.',points:['Uma escolha por pergunta.','É permitido revisar antes de avançar.','O objetivo é entender o papel de cada componente.'],case:'Nenhuma correção aparece nesta tela.',concept:null,notes:'Faça o desafio sem antecipar nenhuma resposta. As três escolhas são locais. Avance para o slide seguinte para comentar as respostas e receber perguntas do público.'};
c.scenes.push({id:'conclusao',chapter:'Missão concluída',time:'28–30 min',duration:2,art:'tribunal',eyebrow:'RESPOSTAS · O MAPA COMPLETO',title:'Decisões que você consegue conferir.',intro:'Veja as respostas do desafio e conecte cada peça à investigação. Que problema do seu negócio poderia virar a próxima missão?',points:['Dados preparados dão contexto.','Ferramentas produzem evidências verificáveis.','Pessoas decidem com visibilidade dos limites.'],case:'Explore o resumo da missão, os pré-requisitos reais e as fontes para continuar.',concept:'features',notes:'Comente as respostas nesta etapa e use o restante dos dois minutos para perguntas. O relatório consulta o histórico do workflow, os indicadores calculados no Spark e os rastros das execuções. Os dados do caso são fictícios; as consultas ao AIDP são reais.'});
})();

// Sessão conduzida: 30 min de júri + 10 min de OCI + 20 min de conversa.
(()=>{const c=window.COURTROOM_CONTENT;
c.scenes.push({id:'visita-oci',chapter:'O AIDP na OCI',art:'arquivo',eyebrow:'30–40 MIN · POR DENTRO DO AMBIENTE',title:'Agora, vamos ver onde isso acontece.',intro:'Saímos do tribunal e entramos no Workbench para reconhecer os recursos usados na investigação.',points:['Workspace e arquivos do projeto.','Catálogo, processamento e histórico do workflow.','Agentes, ferramentas e base documental.'],case:'Visita conduzida pela apresentadora. Os recursos já estão preparados; o público acompanha sem instalação.',concept:null,notes:'Abrir a aba OCI/Workbench previamente autenticada. Seguir o roteiro de visita em 10 minutos, sem mostrar credenciais nem iniciar provisionamento.'});
c.scenes.push({id:'perguntas',chapter:'Dúvidas e curiosidades',art:'tribunal',eyebrow:'40–60 MIN · A CONVERSA CONTINUA',title:'O que vocês querem explorar?',intro:'Vamos conversar sobre decisões de arquitetura, limites e como adaptar a investigação a outros problemas.',points:['O que você mudaria neste desenho?','Que evidência exigiria antes de agir?','Que parte gostaria de reproduzir depois?'],case:'O material de reprodução é para depois do evento. Terraform, notebook, dados e instruções acompanham o projeto.',concept:null,notes:'Reservar aproximadamente 15 minutos para perguntas, 3 para explicar o material e 2 para fechar. Não prometer provisionamento completo pelo Terraform atual.'});
c.agenda=[
  {
    "slide": 1,
    "start": 0,
    "end": 1,
    "duration": 1,
    "title": "Abertura",
    "activity": "Apresentar problema, personagens e formato: júri conduzido, visita ao AIDP e conversa. Ninguém precisa instalar ferramentas."
  },
  {
    "slide": 2,
    "start": 1,
    "end": 4,
    "duration": 3,
    "title": "Componentes",
    "activity": "Percorrer o caminho dos personagens em cerca de 90 segundos e situar os componentes. Guardar detalhes de telas para a visita à OCI."
  },
  {
    "slide": 3,
    "start": 4,
    "end": 6,
    "duration": 2,
    "title": "Incidente e voto",
    "activity": "Ler os indicadores, registrar a primeira escolha e avançar sem antecipar a correção."
  },
  {
    "slide": 4,
    "start": 6,
    "end": 8,
    "duration": 2,
    "title": "Fontes",
    "activity": "Revelar a estratégia da etapa anterior e mostrar as fontes consultadas."
  },
  {
    "slide": 5,
    "start": 8,
    "end": 11,
    "duration": 3,
    "title": "Preparação",
    "activity": "Conferir bronze, silver e gold da última execução concluída. Se reexecutar, fazer uma única chamada e distinguir os horários."
  },
  {
    "slide": 6,
    "start": 11,
    "end": 13,
    "duration": 2,
    "title": "Catálogo",
    "activity": "Comparar metadados da fonte SQL e da gold. Explicar estrutura e acesso sem encenar troca de identidade."
  },
  {
    "slide": 7,
    "start": 13,
    "end": 16,
    "duration": 3,
    "title": "Workflow",
    "activity": "Mostrar tarefas e histórico real. Abrir um script brevemente; os detalhes do Workbench ficam para a visita após o júri."
  },
  {
    "slide": 8,
    "start": 16,
    "end": 19,
    "duration": 3,
    "title": "Byte",
    "activity": "Consultar Byte ao entrar. Comparar cartão e Pix, conferindo números e origem. Não antecipar a causa."
  },
  {
    "slide": 9,
    "start": 19,
    "end": 22,
    "duration": 3,
    "title": "Íris",
    "activity": "Consultar Íris ao entrar. Conferir um trecho no documento e preservar a diferença entre evidência e conclusão."
  },
  {
    "slide": 10,
    "start": 22,
    "end": 24,
    "duration": 2,
    "title": "Escopo",
    "activity": "Executar um teste de escopo e mostrar rastros. Evitar chamadas repetidas para preservar o ritmo."
  },
  {
    "slide": 11,
    "start": 24,
    "end": 25,
    "duration": 1,
    "title": "Júri",
    "activity": "Coletar e registrar o voto do júri. O parecer só aparece na próxima etapa."
  },
  {
    "slide": 12,
    "start": 25,
    "end": 27,
    "duration": 2,
    "title": "Atlas",
    "activity": "Consultar Atlas com as respostas obtidas. Conferir impacto, limites e próxima verificação."
  },
  {
    "slide": 13,
    "start": 27,
    "end": 28,
    "duration": 1,
    "title": "Desafio",
    "activity": "Registrar três respostas de quiz sem correção nesta tela."
  },
  {
    "slide": 14,
    "start": 28,
    "end": 30,
    "duration": 2,
    "title": "Fechamento da missão",
    "activity": "Corrigir o quiz e fechar a missão. Convidar o público para ver o AIDP real na OCI; as perguntas amplas ficam para o último bloco."
  },
  {
    "slide": 15,
    "start": 30,
    "end": 40,
    "duration": 10,
    "title": "Visita à OCI",
    "activity": "Alternar para a aba já autenticada da OCI/Workbench. Mostrar workspace, catálogo, compute, workflow e agentes já preparados, sem provisionar do zero."
  },
  {
    "slide": 16,
    "start": 40,
    "end": 60,
    "duration": 20,
    "title": "Perguntas e próximos passos",
    "activity": "Abrir dúvidas e curiosidades. Mostrar o material para reprodução posterior e encerrar perto de 60 minutos."
  }
];
c.sessionMinutes=60;c.juryMinutes=30;
c.sessionBlocks=[{name:'Júri interativo',start:0,end:30},{name:'Visita à OCI',start:30,end:40},{name:'Dúvidas e curiosidades',start:40,end:60}];
c.agenda.forEach((item,i)=>Object.assign(c.scenes[i],{time:`${item.start}–${item.end} min`,duration:item.duration}));
c.scenes[0].eyebrow='30 MIN DE JÚRI · 10 MIN DE OCI · 20 MIN DE CONVERSA';
c.scenes[1].notes='Reserve três minutos para situar os componentes. Use Começar o caminho; os detalhes do Workbench serão mostrados no bloco OCI, após o júri.';
c.scenes[13].chapter='Missão concluída · vamos à OCI';
c.scenes[13].intro='Confira as respostas do desafio. Depois vamos conhecer o ambiente real do AIDP na OCI e conversar sobre as escolhas da investigação.';
c.scenes[13].notes='Corrigir o quiz somente aqui. Fechar o júri até 30 minutos e avançar para a visita de 10 minutos à OCI. Reservar as perguntas amplas para 40–60 minutos.';
})();
