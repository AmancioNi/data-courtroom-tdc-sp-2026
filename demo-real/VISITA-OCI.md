# Visita ao AIDP na OCI — roteiro de 10 minutos

Bloco entre **30:00 e 40:00**, depois do júri. A apresentadora opera; ninguém precisa criar conta ou executar comandos. A intenção é reconhecer, na interface nativa, as peças usadas na investigação. Não provisionar recursos neste bloco.

## Antes da sessão

Deixe uma aba autenticada no console OCI e o Workbench aberto no workspace da demo. Confira acesso às telas de catálogo, computes, workflow e agentes. Evite depender de busca ou login durante os dez minutos. Ajuste o zoom do navegador para o projetor. Mantenha arquivos de credenciais, configurações privadas e dados de outras demonstrações fora da projeção.

Os nomes abaixo são do ambiente da apresentadora, não IDs para o participante copiar. Os rótulos de navegação podem variar conforme a versão do serviço: ensaie no ambiente efetivamente usado. Não crie um recurso só para preencher uma etapa do roteiro.

| Janela | Abrir | Mostrar | Fala sugerida |
|---|---|---|---|
| 30–32 | Console OCI → instância AIDP → Workbench → workspace `tdcsp-labs` | Organização do trabalho e pasta `/Workspace/DataCourtroom` | “Saímos do tribunal e estamos no ambiente que recebeu as consultas. O workspace reúne os arquivos, os trabalhos e o acesso aos recursos do projeto.” |
| 32–34 | Catálogo `tdcsp`, schema `agent_search`, tabela `tdc_dc_pagamentos`; depois catálogo `default`, schema `tdc_courtroom` | Fonte relacional do Byte, tabelas preparadas e volume `evidencias` | “Aqui localizamos os ativos e conferimos sua estrutura. Esta tabela externa alimenta a consulta do Byte. As cópias preparadas pelo Spark ficam neste outro catálogo.” |
| 34–37 | Compute `tdccluster`; workflow `dc_preparar_pagamentos` | Estado do compute, carregar → validar → agregar, uma execução e um resultado | “O workspace organiza. O compute executa. O workflow define a ordem e deixa um histórico do que aconteceu. Vamos abrir a execução que produziu os números do caso.” |
| 37–40 | AI Compute `computetdc`; agentes `dc_byte`, `dc_iris`, `dc_atlas` | Uma definição de ferramenta SQL, a ligação da Íris à base `kb_aurora_evidencias`, instruções de Atlas e um rastro | “Cada agente recebeu um papel e acesso a ferramentas. Byte consulta dados, Íris procura nos documentos e Atlas revisa o dossiê enviado pela aplicação. A resposta continua precisando de conferência.” |

## Condução, sem virar catálogo de funcionalidades

Comece cada tela com uma necessidade do caso: **onde estão as provas? o que executa? como repetimos? como conferimos a resposta?** Dê alguns segundos para as pessoas reconhecerem a tela antes de trocar.

Em catálogo, abra apenas uma estrutura de tabela. Não percorra todas as colunas. No volume, localize um documento conhecido pelo público. Em workflow, mostre a dependência entre tarefas, o estado e o horário da execução. Se já estiver concluída, diga que é uma execução anterior; não a apresente como nova.

Ao mostrar agentes, abra uma ferramenta e um rastro representativos. Não leia os três prompts inteiros. A aplicação envia as respostas de Byte e Íris para Atlas; nesta demo, Atlas não chama autonomamente os outros agentes. O exemplo não prova causa, retorno financeiro ou superioridade da arquitetura.

**Perguntas durante a visita:** responda uma dúvida de localização em uma frase. Para uma discussão longa: “Vamos guardar essa para o próximo bloco, porque quero mostrar onde essa parte aparece primeiro.” Anote o assunto para voltar a ele.

**Ponte para as perguntas, perto de 40:00:**

> “Essas são as peças que estavam por trás do jogo. Neste caso, eu as conectei assim. Agora vamos conversar sobre o que vocês mudariam, o que ficou confuso e em que situação isso faria sentido.”

## Se algo não abrir

Não gaste o bloco com login ou provisionamento. Após uma tentativa breve, use uma captura previamente preparada e identificada como registro, se houver. Caso contrário, volte ao caminho dos personagens e ao histórico já disponível na aplicação, diga que a visita à interface ficou limitada pelo acesso e siga para as perguntas. Não simule uma tela como se fosse o console real.

## Apoios

- [Falas completas e perguntas frequentes](../web-v2/roteiro-de-falas.md).
- [Operação da aplicação](OPERACAO-DEMO.md).
- [Material para reproduzir depois](../kit-participante/README.md).
- [Workspaces — documentação Oracle](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/workspaces.html).
