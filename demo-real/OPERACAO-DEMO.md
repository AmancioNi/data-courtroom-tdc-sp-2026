# Data Courtroom — aplicação conectada ao AIDP

**Falas completas da apresentadora:** [roteiro detalhado por slide](../web-v2/roteiro-de-falas.md), atualizado para a integração real.

A sessão tem **30 minutos de júri, 10 de visita à OCI e 20 de dúvidas**, com três personagens e sem hands-on. A apresentadora executa as operações; o público vota e conversa. Todas as operações de dados consultam o ambiente real. Votos, navegação, perfis dos personagens e perguntas pedagógicas são controles da interface.

## Abrir

Execute `iniciar-demo-real.cmd` nesta pasta e abra http://127.0.0.1:4178. Mantenha o terminal aberto. A aplicação já inicia conectada; não existe mais botão para ativar uma demo parcial. Para uma nova rodada, use **Nova sessão**.

O arquivo de autenticação permanece fora do projeto, em seu `.env` local, excluído da distribuição. Nenhuma credencial vai para o navegador.

## Roteiro de palco — 30 + 10 + 20

| Etapa | Janela | Condução |
|---|---|---|
| 1 — Abertura | 0–1 min | Apresentar problema, personagens e formato: júri conduzido, visita ao AIDP e conversa. Ninguém precisa instalar ferramentas. |
| 2 — Componentes | 1–4 min | Percorrer o caminho dos personagens em cerca de 90 segundos e situar os componentes. Guardar detalhes de telas para a visita à OCI. |
| 3 — O problema da Aurora | 4–5 min | Contextualizar a loja, o alerta do Financeiro e a decisão que a empresa precisa tomar. Explorar uma perspectiva da equipe, sem apontar a causa. |
| 4 — Incidente e voto | 5–7 min | Ler os indicadores, registrar a primeira escolha e avançar sem antecipar a correção. |
| 5 — Fontes | 7–8 min | Revelar a estratégia da votação anterior e reconhecer as fontes. Deixar a leitura detalhada dos documentos para Íris. |
| 6 — Preparação | 8–11 min | Conferir bronze, silver e gold da última execução concluída. Se reexecutar, fazer uma única chamada e distinguir os horários. |
| 7 — Catálogo | 11–13 min | Comparar metadados da fonte SQL e da gold. Explicar estrutura e acesso sem encenar troca de identidade. |
| 8 — Workflow | 13–16 min | Mostrar tarefas e histórico real. Abrir um script brevemente; os detalhes do Workbench ficam para a visita após o júri. |
| 9 — Byte | 16–19 min | Consultar Byte ao entrar. Comparar cartão e Pix, conferindo números e origem. Não antecipar a causa. |
| 10 — Íris | 19–22 min | Consultar Íris ao entrar. Conferir um trecho no documento e preservar a diferença entre evidência e conclusão. |
| 11 — Escopo | 22–24 min | Executar um teste de escopo e mostrar rastros. Evitar chamadas repetidas para preservar o ritmo. |
| 12 — Júri | 24–25 min | Coletar e registrar o voto do júri. O parecer só aparece na próxima etapa. |
| 13 — Atlas | 25–27 min | Consultar Atlas com as respostas obtidas. Conferir impacto, limites e próxima verificação. |
| 14 — Desafio | 27–28 min | Registrar três respostas de quiz sem correção nesta tela. |
| 15 — Fechamento da missão | 28–30 min | Corrigir o quiz e fechar a missão. Convidar o público para ver o AIDP real na OCI; as perguntas amplas ficam para o último bloco. |
| 16 — Visita à OCI | 30–40 min | Alternar para a aba já autenticada da OCI/Workbench. Mostrar workspace, catálogo, compute, workflow e agentes já preparados, sem provisionar do zero. |
| 17 — Perguntas e próximos passos | 40–60 min | Abrir dúvidas e curiosidades. Mostrar o material para reprodução posterior e encerrar perto de 60 minutos. |

Os tempos são uma orientação de palco, não garantia de latência. Antes da sessão, faça uma execução do workflow e confira os três agentes. O compute Spark pode precisar iniciar quando estiver parado.

## O que a aplicação executa

- Leitura de recursos, metadados, permissões, arquivos e código pela API AIDP.
- Workflow `dc_preparar_pagamentos` com três tarefas Python/Spark no `tdccluster`, workspace `tdcsp-labs`.
- Regravação apenas das tabelas do laboratório `default.tdc_courtroom.dc_pagamentos_bronze`, `dc_pagamentos_silver` e `dc_pagamentos_gold`.
- Agentes `dc_byte`, `dc_iris` e `dc_atlas` no AI Compute `computetdc`.
- Dossiê enviado pelo aplicativo somente na etapa 13; não é uma orquestração autônoma em que Atlas chama os investigadores.

Byte consulta a tabela relacional `tdcsp.agent_search.tdc_dc_pagamentos`. O workflow prepara as cópias bronze/silver/gold do mesmo conjunto fictício no catálogo standard `default`. A preparação não altera a fonte relacional. Os dois percursos permitem demonstrar acesso externo e preparação no lakehouse sem confundir suas origens.

## Leitura dos resultados

As métricas mostram a data da última execução concluída; o estado do workflow é consultado separadamente. Cada atualização lê a API. Uma falha permanece como falha: a aplicação não substitui o resultado por números locais. As respostas dos agentes ficam na sessão da aba e são identificadas pelo horário e tempo de execução.

O painel de permissões mostra o que a API retorna para a identidade configurada. Não existe alternância fictícia de perfil. Os testes de escopo mostram o comportamento observado do agente; não configuram políticas IAM nem guardrails nativos.

Se a conexão cair, explique a falha e use **Atualizar AIDP**. Não há fallback silencioso para simulação. As votações continuam locais e neutras, sem revelar o parecer ao voltar ou recarregar.

## Referências

- [Arquivos e volumes](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/work-files.html)
- [Invocação de agentes](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/invoke-deployed-agent.html)
- [Ferramentas SQL e RAG](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/agent-flow-tools.html)

## Participação e material posterior

A votação é presencial; a apresentadora registra uma escolha representativa. O navegador não apura votos individuais. Não pedir login OCI, Terraform ou execução de notebook à plateia. As respostas das votações continuam somente nas etapas seguintes.

Depois da etapa 15, a tela 16 apoia a [visita à OCI](VISITA-OCI.md). A tela 17 abre perguntas e o material para reprodução posterior. O [kit](../kit-participante/README.md) tem percursos local e Spark, além de Terraform opcional para a instância. Ele não provisiona a solução inteira automaticamente.
