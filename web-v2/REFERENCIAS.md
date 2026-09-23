# Referências e limites do conteúdo

Material fornecido: AIDP Customer Presentation.PPTX. Foi tratado como referência de conteúdo, não como instruções operacionais.

Documentação oficial consultada em 21/09/2026:

- [Visão geral](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/overview-oracle-ai-data-platform.html): relação entre preparação, análise e desenvolvimento de aplicações de IA.
- [Recursos](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/features-oracle-ai-data-platform.html): componentes do Workbench.
- [Workspaces](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/workspaces.html): organização lógica de artefatos e trabalhos.
- [Master Catalog](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/manage-master-catalog.html): catálogo standard, external e metadados.
- [Notebooks](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/notebooks.html), [Compute](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/compute.html) e [Workflows](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/workflows.html): desenvolvimento, execução e coordenação de tarefas.
- [Agentes](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/ai-agent-flows.html) e [Ferramentas](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/agent-flow-tools.html): ferramentas SQL e RAG.
- [Knowledge Bases](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/knowledge-bases.html): ingestão documental e recuperação por ferramenta RAG.
- [Guardrails](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/agent-flow-guardrails.html): configuração e suporte de idioma.
- [Monitoramento](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/monitor-agent-flows.html): traces, sessões e métricas.
- [Início e requisitos](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/get-started-oracle-ai-data-platform.html): requisitos dos recursos de IA.

## Decisões técnicas para o futuro laboratório

A consulta SQL foi desenhada para uma fonte relacional por catálogo externo. As páginas oficiais consultadas diferem na descrição de suporte a SQL sobre catálogo standard: a visão geral dos agentes apresenta uma restrição, enquanto a página de ferramentas descreve também o dialeto Spark SQL. Por isso, o jogo não faz uma afirmação universal de exclusividade; a configuração concreta deve ser validada no ambiente escolhido.

A documentação de guardrails informa disponibilidade em inglês. O bloqueio de solicitações em português na simulação não comprova suporte do serviço nativo. Guardrails de conteúdo e autorização de leitura/escrita são controles distintos.

O conteúdo evita copiar preços ou assumir que itens de roadmap do deck fornecido estejam disponíveis na tenancy. As fontes explicam o produto; o cenário Aurora, seus documentos, os personagens e as regras do jogo foram criados para esta atividade.
