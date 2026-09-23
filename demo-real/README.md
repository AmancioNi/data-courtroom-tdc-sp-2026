# Data Courtroom — integração completa

A aplicação principal está conectada ao AIDP em todas as etapas operacionais, não apenas nos três agentes. Abra pelo `iniciar-demo-real.cmd` e acesse http://127.0.0.1:4178.

- `OPERACAO-DEMO.md`: roteiro de 30 minutos de júri + 10 na OCI + 20 de conversa, sem hands-on.
- `demo-server.cjs`: servidor local autenticado, com operações limitadas aos recursos do caso.
- `live-service.cjs`: leitura de recursos, catálogo, arquivos, métricas e workflows.
- `pipeline/`: três scripts executados no Spark do AIDP.
- `provisionamento/pipeline-resources.json`: identificadores do workflow e compute.
- `agentes/prompts.md`: instruções dos agentes.
- `dados/` e `documentos/`: fontes fictícias carregadas no ambiente.

O workflow usa `tdccluster`; os agentes usam `computetdc`. Ambos já existiam. No ambiente original, não foi criado novo compute; na reprodução, prepare os seus. A execução pode iniciar o Spark se ele estiver parado, respeitando sua configuração de encerramento automático.

A aplicação não tem fallback de dados simulados. Os votos e o quiz são locais; as operações de dados são reais. A consulta SQL de Byte usa a fonte relacional tdcsp; o workflow escreve as três tabelas do caso no catálogo standard default, sem alterar aquela fonte.

Credenciais permanecem fora do projeto. Não execute novamente o SQL inicial de carga. Os arquivos de configuração de exemplo devem ser preenchidos com os recursos da sua conta. Consulte `CONFIGURACAO.md`.

- `VISITA-OCI.md`: roteiro da visita à interface nativa, entre os minutos 30 e 40.
- `../kit-participante/README.md`: material para reproduzir depois, na conta de cada pessoa.
