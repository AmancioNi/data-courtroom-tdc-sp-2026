# Configurar a integração completa na sua conta

Este percurso é para depois do evento. O kit local e o notebook são as formas mais rápidas de estudar o caso. O servidor integrado exige os recursos abaixo; o Terraform incluído cobre somente a instância. Esta cópia ainda não foi conectada de ponta a ponta a uma segunda conta.

## 1. Instância e recursos de execução

Prepare o acesso OCI, as permissões do serviço e seu workspace. Siga os requisitos da [Oracle](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/get-started-oracle-ai-data-platform.html) para capacidades de IA. Se necessário, use o Terraform em `../kit-participante/terraform` conforme o README do kit. Disponibilize compute Spark e AI Compute próprios. Os nomes de exibição podem mudar; use as chaves reais da sua conta nos arquivos de configuração.

## 2. Fontes e preparação

A aplicação usa estes nomes lógicos do caso. Preserve-os no ambiente descartável ou ajuste consistentemente `live-service.cjs`, os scripts e as ferramentas:

- Catálogo externo `tdcsp`, schema `agent_search`, tabela `tdc_dc_pagamentos`.
- Catálogo standard `default`, schema `tdc_courtroom`, volume `evidencias`.
- Tabelas `dc_pagamentos_bronze`, `dc_pagamentos_silver`, `dc_pagamentos_gold` no schema standard.

Prepare uma conexão ao seu banco e o schema `AGENT_SEARCH`. Em uma base destinada ao laboratório, revise e execute `consultas/carregar-pagamentos.sql` uma única vez: cria e carrega a tabela do caso, sem substituir tabela existente. O banco e o catálogo externo não são criados pelo kit. Confira a consulta em `consultas/byte-pagamentos.sql`.

No volume, envie `../kit-participante/dados/pagamentos_bronze.csv` e os três arquivos de `documentos/`. Em `pipeline/01_carregar.py`, substitua `REPLACE_WITH_YOUR_CSV_URI` pelo endereço legível pelo compute, obtido no seu ambiente. A conexão e o acesso ao armazenamento dependem da conta.

Salve os três scripts de `pipeline/` na pasta `/Workspace/DataCourtroom`. Crie o workflow com tarefas chamadas exatamente `carregar`, `validar`, `agregar`, nessa ordem, cada uma usando seu script e compute Spark. Os scripts regravam apenas as três tabelas nomeadas do laboratório. Execute e confira 2.003 recebidos, 2.000 válidos e receita agregada R$ 153.000. A tarefa `agregar` deve retornar `COURTROOM_RESULT:`: a aplicação lê essa saída.

## 3. Base e agentes

Crie e indexe a base `default.tdc_courtroom.kb_aurora_evidencias` com os documentos do caso. Confira a disponibilidade dos trechos antes de testar Íris. Crie três agentes conforme `agentes/prompts.md`:

- Byte: ferramenta `consultar_pagamentos`, SQL fixo de leitura em `consultas/byte-pagamentos.sql`.
- Íris: ferramenta `buscar_evidencias`, vinculada à base documental.
- Atlas: recebe o dossiê da aplicação; não precisa de ferramenta que altere pagamentos.

Escolha modelos disponíveis no seu ambiente, publique os agentes no seu AI Compute e obtenha os endpoints de invocação. No ensaio de 23/09/2026, confira especialmente o destino da ferramenta RAG: `default.tdc_courtroom.kb_aurora_evidencias`, separado do catálogo SQL `tdcsp.agent_search`. Atlas foi validado com Cohere; o modelo `xai.grok-4.20-multi-agent` rejeitou a forma de chamada usada por esta demo. Não selecione um modelo só porque aparece na lista: teste a invocação pelo servidor antes da apresentação. Permissões reais são configuradas na conta; os prompts e a interface não substituem IAM. Teste números, trechos e tratamento de falha antes da aplicação.

## 4. Configuração local do servidor

Na raiz do projeto, copie `.env.example` para `.env`. Preencha o caminho absoluto do seu perfil OCI, endpoint base da instância, OCID e chave do workspace. Não coloque a chave privada dentro do repositório.

Em `demo-real/provisionamento/`:

1. Copie `pipeline-resources.example.json` para `pipeline-resources.json`; preencha chaves de workspace, Spark, AI Compute e workflow. A chave do workspace deve coincidir com `.env`.
2. Para Byte, Íris e Atlas, copie `dc_<nome>-deploy-response.example.json` para `dc_<nome>-deploy-response.json` e preencha `data.endpointUrl` com o endpoint publicado na sua conta.
3. Os exemplos são placeholders; nunca funcionam como acesso à conta da apresentadora.

O adaptador REST usa rotas `20260430` para AIDP e `20240831` para a base documental do ambiente de origem. Essas rotas e os formatos precisam ser conferidos se sua versão ou região diferir. A validação de endpoint aceita HTTPS no gateway AIDP comercial `gateway.aidp.<região>.oci.oraclecloud.com`; outros domínios exigem revisão do adaptador.

Execute `npm install` e `npm start` na raiz. Acesse http://127.0.0.1:4178. O servidor escuta apenas na máquina local. Uma página estática publicada no GitHub não tem acesso autenticado à sua OCI.

## 5. Conferir antes de usar

- Etapa 2: recursos do seu ambiente respondem.
- Etapas 5–7: métricas, metadados e histórico correspondem à execução do seu workflow.
- Etapa 8: Byte retorna quatro grupos com números e origem corretos.
- Etapa 9: Íris devolve trechos verificáveis nos documentos.
- Etapa 11: registrar voto sem parecer; na 12, enviar as duas respostas a Atlas.
- Etapas 15–16: visita e conversa; nenhum provisionamento é iniciado por essas telas.

Se alguma consulta falhar, a aplicação mostra o erro. Não há fallback silencioso que invente uma resposta cloud. Para encerrar, pare o servidor e revise sessões, computes e recursos descartáveis criados na sua conta conforme o guia do kit.
