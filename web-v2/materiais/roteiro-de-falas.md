# Data Courtroom — O Julgamento da Anomalia
## Roteiro detalhado de falas — integração real com AIDP

**Apresentadora:** Nikolly Amancio\
**Evento:** TDC SP 2026\
**Duração de palco:** 60 minutos — 30 de júri, 10 de visita à OCI e 20 de dúvidas\
**Formato:** 15 etapas de júri e 2 telas de apoio para visita e conversa, com Byte, Íris e Atlas\
**Atualização:** 22/09/2026\
**Aplicação:** http://127.0.0.1:4178/#1

Este é o roteiro principal de falas da versão conectada. Substitui integralmente o roteiro da simulação inicial. Os dados e documentos da Aurora são fictícios; as consultas, execuções de workflow e chamadas dos agentes acontecem no AIDP real.

## Como usar este roteiro

As **falas de palco** foram pensadas para o intervalo de cada etapa. A primeira meia hora reúne explicação, consultas e decisões do júri. Os dez minutos seguintes mostram os recursos na OCI; os vinte finais ficam para conversa. Não preencha a hora lendo mais texto. Os aprofundamentos apoiam as perguntas. Ler todo este documento em voz alta continua desnecessário.

As falas atribuídas aos personagens são interpretadas pela apresentadora. Não são áudio automático nem citações do modelo. As respostas geradas pelo AIDP variam: comente a resposta que estiver na tela, sem apresentá-la como um texto previamente garantido.

Cada etapa traz objetivo, sequência de cliques, fala, leitura do resultado, transição e orientações para imprevistos. Durante o ensaio, marque as frases que combinam com sua maneira de falar. Não é necessário decorar os parágrafos.

**Regra de ouro das votações:** na etapa de votação, registre a escolha sem confirmar, negar ou explicar. A resposta só aparece na etapa seguinte. Isso vale para a decisão inicial, o voto do júri e o desafio final. Não antecipe o parecer de Atlas enquanto estiver no slide 12.

## Tom da conversa e ritmo de palco

Comece pelo incômodo de quem recebeu o alerta, não pelo nome da plataforma. O problema é investigar uma queda de receita com informações espalhadas. AIDP é a implementação escolhida para este laboratório; outras combinações de banco, scripts, ferramentas e documentos podem atender ao mesmo objetivo.

Apresente cada componente quando surgir uma necessidade: conferir registros leva ao processamento; encontrar a tabela leva ao catálogo; buscar um registro leva à recuperação documental. Evite enumerar funcionalidades antes de o público entender para que elas servem neste caso.

Fale como quem investiga junto: “vamos conferir”, “o que isso nos permite dizer?”, “aqui eu escolhi fazer assim”. Use frases curtas e deixe o público observar a tela. Não é necessário repetir “real”, “plataforma” e “AIDP” em toda fala; explique o escopo no começo e identifique as operações quando isso ajudar a leitura.

Os nomes dos personagens dão leveza. Não é necessário fazer vozes ou transformar cada clique num anúncio de missão. Um comentário breve, uma pausa e uma pergunta concreta produzem um ritmo mais natural.

**Pequenas participações, dentro do tempo já reservado:**

| Momento | Interação | Limite para não alongar |
|---|---|---|
| Abertura | “Quem já precisou explicar um número estranho?” | Mãos levantadas, 5 segundos |
| Preparação | “Uma linha é sempre uma compra?” | Pausa de 3 segundos, depois confira os dados |
| Byte, após o retorno | “O que mudou? O que ficou igual?” | Ouça uma observação sobre os números, sem pedir a causa |
| Íris, após o retorno | “Onde vocês confeririam esse trecho?” | Aponte o documento e abra a fonte |
| Atlas, somente no slide 13 | “Essa conclusão vai além da prova?” | Uma reação breve; corrija exageros |

As votações continuam neutras. Essas participações não substituem nem antecipam suas respostas. Se houver atraso, corte primeiro as perguntas extras.

**Escolhas que vale reconhecer com naturalidade:** para este conjunto pequeno, poderíamos investigar com SQL e leitura manual. O workflow serve para mostrar uma preparação repetível; o agente oferece outra forma de interagir com as informações. O laboratório permite avaliar essas escolhas, não demonstra por si só economia de tempo, redução de custo ou superioridade sobre outras arquiteturas.

## O mapa da apresentação

| Slide | Tempo acumulado | Missão | O que acontece de verdade |
|---|---|---|---|
| 1 | 00:00–01:00 | Convocar o júri | Aplicação consulta o ambiente |
| 2 | 01:00–04:00 | Organizar a investigação | Recursos e estados vêm do AIDP |
| 3 | 04:00–05:00 | Entender o problema da empresa | Cena fictícia: Aurora, alerta do Financeiro e perspectivas da equipe |
| 4 | 05:00–07:00 | Observar o incidente e votar | Indicadores da última preparação concluída; voto local |
| 5 | 07:00–08:00 | Examinar as fontes | Leitura de catálogo, tabela, volume e arquivos |
| 6 | 08:00–11:00 | Preparar as provas | Resultados do Spark e possibilidade de iniciar workflow |
| 7 | 11:00–13:00 | Localizar e entender ativos | Metadados e permissões retornados pela API |
| 8 | 13:00–16:00 | Acompanhar o trabalho | Estados, histórico e scripts reais do workspace |
| 9 | 16:00–19:00 | Ouvir Byte | Agente executa ferramenta SQL de leitura |
| 10 | 19:00–22:00 | Ouvir Íris | Agente usa RAG; documentos podem ser abertos no volume |
| 11 | 22:00–24:00 | Testar os limites | Solicitação real ao agente e rastros da execução |
| 12 | 24:00–25:00 | Registrar o voto | Escolha local, sem parecer |
| 13 | 25:00–27:00 | Ouvir Atlas | Agente recebe as respostas reais de Byte e Íris |
| 14 | 27:00–28:00 | Desafio final | Três escolhas pedagógicas, sem correção |
| 15 | 28:00–30:00 | Conferir e encerrar | Respostas do quiz, histórico e relatório real |
| 16 | 30:00–40:00 | Visitar a OCI/Workbench | Recursos reais na interface nativa |
| 17 | 40:00–60:00 | Conversar e compartilhar materiais | Dúvidas, curiosidades e reprodução posterior |

## Formato desta sessão

**Sem hands-on durante o evento.** A apresentadora opera a aplicação e o AIDP. O público participa como júri e por perguntas, sem instalar ferramentas, executar Terraform ou configurar uma conta.

- **00:00–30:00:** investigação e julgamento, com a demo real conduzida pela apresentadora.
- **30:00–40:00:** visita à própria OCI/Workbench para mostrar a aparência e a organização do ambiente usado.
- **40:00–60:00:** dúvidas, curiosidades e conversa sobre o desenho da solução.

O [kit de reprodução](../../kit-participante/README.md) será disponibilizado junto ao código no GitHub para estudo posterior. Não pressupor que Terraform e conteúdo já replicam automaticamente toda a demo. Os limites de cada parte estão no material.

**Fala de combinado na abertura:**

> “Hoje vocês não precisam instalar nada. Na primeira meia hora, vocês são o júri e eu conduzo as consultas. Depois vamos olhar o AIDP por dentro, na OCI, e deixamos o restante para dúvidas e curiosidades. O material fica disponível para quem quiser reproduzir com calma depois.”

## Preparação antes de entrar no palco

### Ensaio técnico, com antecedência

1. Execute [iniciar-demo-real.cmd](../../demo-real/iniciar-demo-real.cmd). Mantenha o terminal aberto e abra o endereço da aplicação. A pasta está em `outputs/tdc_sp_2026/demo-real`.
2. No slide 2, confira se os recursos do ambiente respondem. Se um recurso falhar, resolva antes do início; abrir a página não prova que todas as integrações estejam funcionando.
3. Execute a preparação e confirme as três tarefas com sucesso no slide 8. O Spark pode precisar iniciar. Não deixe a primeira inicialização para os três minutos reservados ao workflow.
4. Confira no slide 6 a data do resultado e as contagens. O conjunto do ensaio possui 2.003 registros recebidos, 2 duplicatas, 1 inválido e 2.000 válidos.
5. Consulte Byte e Íris. Confira números e fontes. Registre um voto e consulte Atlas no slide seguinte para testar o percurso completo.
6. Confira o tamanho da fonte no projetor, o zoom, a rolagem do painel e a visibilidade das tabelas. O texto pode ocupar mais espaço conforme a resposta do modelo.
7. Teste a conexão que será usada no evento. Os tempos variam com rede, compute e serviço. Ensaios anteriores levaram aproximadamente 30–35 segundos para Byte, cerca de 70 segundos para Íris e 17–20 segundos para Atlas; isso é referência de ensaio, não garantia.
8. Mantenha este documento em outra tela ou impresso. Abrir notas na própria apresentação pode projetar orientações e respostas que deveriam ficar com você.
9. Antes da rodada oficial, use **Nova sessão** e volte ao início. Isso limpa as escolhas e respostas da aplicação; não apaga os dados, tabelas nem o histórico no AIDP. Não use esse botão no meio da investigação.
10. Preserve o processo do servidor durante a apresentação: reiniciá-lo limpa a lista de rastros mantida em memória por ele, embora os recursos cloud continuem existindo.

### Como apresentar a participação do público

A votação é presencial: peça dedos levantados, uma alternativa por pessoa. Você registra uma escolha representativa no navegador. A aplicação não recebe votos dos celulares e não apura percentuais. Em empate, combine uma escolha para seguir, sem inventar um vencedor estatístico.

### O que fica local e o que está no AIDP

| Elemento | Comportamento desta versão |
|---|---|
| Personagens, navegação e votos | Interface do jogo; os personagens não têm voz automática |
| Quiz | Perguntas pedagógicas com correção na próxima etapa |
| Fontes, arquivos, catálogo e código | Consultados pelas APIs do AIDP |
| Preparação | Scripts Python/Spark executados por workflow no AIDP |
| Indicadores | Saída da última preparação concluída, com identificação da execução |
| Byte, Íris e Atlas | Respostas geradas por agentes publicados no AIDP |
| Dossiê | Aplicação reúne as respostas de Byte e Íris e as envia a Atlas |
| Respostas já obtidas | Permanecem na sessão da aba; recarregar não é uma nova inferência |
| Relatório | Consulta workflow, métricas e rastros; inclui as respostas guardadas na sessão |

Não diga que a aplicação inteira roda na nuvem: a interface e seu servidor de integração estão na máquina da apresentação. As operações de dados e agentes usam o AIDP. Credenciais ficam no servidor, fora do navegador e da projeção.

## 1. O convite — 00:00 a 01:00



**Objetivo:** o público entender a missão, seu papel e os três personagens antes de ouvir siglas.

**Na tela:** abertura do tribunal, personagens e verificação do ambiente.

**Condução:** aponte para cada personagem. Apresente os personagens em uma frase cada. Abrir perfis é opcional; preserve a abertura de um minuto. Ao terminar, clique em **Iniciar a missão →**.

**Fala de palco**

> “Bom dia! Eu sou a Nikolly. Imaginem começar o dia com esta mensagem: a receita caiu e precisamos entender o que aconteceu.
>
> Quem aqui já abriu um painel, encontrou um número estranho e teve que sair atrás da explicação? [Pausa breve para mãos levantadas.]
>
> Hoje esse problema é da loja Aurora. Vocês vão ser o júri. Byte vai olhar os números, Íris vai procurar os registros e Atlas vai juntar as pistas. E nós podemos discordar dele.
>
> O caso é inventado para o laboratório. As consultas vão acontecer de verdade. Eu montei uma das formas de investigar isso usando AIDP; conforme aparecer uma necessidade, a gente olha como ela foi resolvida.
>
> Vamos começar pelo problema. O que caiu, onde caiu e o que ainda precisamos descobrir?”

**Transição**

> “Vamos organizar o que precisamos para investigar esse alerta.”

**Se a verificação falhar:** diga “A interface abriu, mas a consulta ao ambiente ainda não respondeu. Vou conferir a conexão.” Não anuncie que a missão está tecnicamente pronta apenas porque os personagens apareceram.

## 2. O que precisamos para investigar — 01:00 a 04:00



**Objetivo:** apresentar as necessidades da investigação e situar a implementação, sem fazer um passeio por funcionalidades.

**Cliques e observação:** confira o painel **Mapa do ambiente**. Aponte workspace, computes, catálogo, base de conhecimento, agentes e workflow. Use **Atualizar AIDP** somente se precisar atualizar os estados. Nesta versão, não há necessidade de clicar nas antigas estações Fundação/Engenharia/Aplicações.

### Caminho guiado pelos personagens — dentro dos três minutos da etapa

Clique em **Começar o caminho →**. Um personagem apresenta cada componente. O caminho no rodapé marca a parada atual; **Próxima parada →**, **← Voltar**, os pontos do caminho e as setas do teclado permitem navegar. Não há avanço automático.

**Fala de entrada**

> “Vamos conhecer as peças que vamos usar. Cada parada tem uma função, e nossos personagens vão acompanhar esse caminho.”

**Seis paradas em aproximadamente 90 segundos; use o restante dos três minutos para situar os recursos:**

1. **Atlas / Workspace:** “Aqui organizamos os arquivos, o código e o plano do projeto. Organizar o trabalho é diferente de executá-lo.”
2. **Íris / Arquivos e conhecimento:** “O volume organiza os arquivos. A base de conhecimento prepara conteúdo para buscar os trechos relevantes.”
3. **Íris / Catálogo:** “O catálogo ajuda a localizar a tabela e entender sua estrutura. Isso não significa copiar tudo para ele.”
4. **Byte / Compute Spark:** “O código define as operações. O compute fornece os recursos para executar o processamento.”
5. **Byte / Workflow:** “O workflow define tarefas e dependências para repetir o trabalho na ordem estabelecida.”
6. **Atlas / AI Compute:** “O AI Compute fornece recursos para executar agentes. Eles usam modelos e ferramentas; o compute não é o próprio modelo.”

As falas dos personagens são didáticas, não respostas geradas nesta visita. **Entender um pouco mais** abre o complemento; **Conferir no ambiente AIDP** mostra os recursos consultados. No workflow, o painel orienta a conferir a execução real na etapa 8.

O caminho representa a ordem da explicação, não um pipeline pelo qual todos os dados passam. Nenhum clique inicia compute ou agente. O parecer continua reservado à etapa 13, depois da votação.

**Concluir visita ✓**, **Voltar ao slide ×** ou Escape retornam à apresentação. Use essa visita como a explicação principal; depois peça ao público que diferencie workspace, compute e workflow. Evite repetir toda a fala abaixo se os conceitos já ficaram claros.

**Fala de palco**

> “Antes dos números, pensem no trabalho de quem recebeu aquele alerta. Provavelmente vai abrir um banco, procurar algum arquivo e perguntar se alguém mudou alguma coisa.
>
> Foi esse caminho que eu organizei aqui. Precisamos de um lugar para trabalhar, processamento para conferir os dados e uma forma de encontrar os registros. Estes são os recursos que estão respondendo no ambiente.
>
> O workspace é onde organizei o projeto. O Spark vai fazer o tratamento dos registros. Os agentes rodam em outro recurso, o AI Compute. Vou mostrar cada um na hora em que precisarmos dele.
>
> Para este laboratório, usei AIDP para montar esse fluxo. Dá para investigar o mesmo problema com SQL, scripts e leitura dos documentos, sem agentes. A pergunta que quero explorar com vocês é: o que conseguimos facilitar com essa aplicação, e o que ainda exige nossa revisão?
>
> Então não precisam decorar este mapa. Guardem três necessidades: conferir os números, encontrar contexto e conseguir revisar a conclusão. Agora vamos conhecer a empresa que recebeu esse alerta.”

**Aprofundamento para ensaio**

O workspace desta demo é `tdcsp-labs`. O compute Spark é `tdccluster`; o AI Compute é `computetdc`. Não leia identificadores longos no palco. Use os nomes para relacionar a tela aos recursos e o estado para comentar disponibilidade.

Um catálogo não é um modelo de linguagem. Um volume não é uma base vetorial por si só. Um workflow não é o raciocínio do agente. Essas distinções ajudam o público a compreender onde cada operação acontece.

**Se perguntarem “é tudo a mesma coisa?”**

> “As peças se integram, mas têm responsabilidades diferentes. O catálogo descreve e organiza; o compute executa; as ferramentas acessam informações; o modelo interpreta o contexto para responder.”

**Transição**

> “Antes de olhar os números, precisamos entender de quem é esse problema.”

## 3. O problema da Aurora — 04:00 a 05:00

**Objetivo:** dar um motivo para a investigação: quem é a empresa, qual alerta recebeu, quem precisa de uma resposta e que decisão está em jogo.

**Fala de palco — aproximadamente 45 segundos**

> “Agora imaginem a Aurora, uma loja que vende pelo site e pelo aplicativo. No fechamento do dia, o Financeiro percebe que entrou menos receita aprovada. Só que as tentativas de compra continuam chegando.
>
> Esse alerta afeta mais de uma equipe: o Financeiro precisa explicar a queda, o Comercial quer entender a experiência do cliente e Operações precisa saber onde agir.
>
> Antes de escolher uma solução, precisamos entender o problema. É isso que vocês vão julgar comigo: o que mudou e o que as provas permitem concluir.”

**Clique:** explore uma das perspectivas — **Financeiro**, **Comercial** ou **Operações**. O painel mostra apenas a preocupação daquela equipe. Não é uma votação nem uma resposta gerada por um agente. Não precisa ler as três perspectivas no palco.

**Condução:** mantenha um minuto nesta tela. Os valores, o recorte e a comparação ficam para a próxima. Não mencione cfg-17, erros de configuração, a concentração no cartão ou a hipótese mais sustentada. O propósito é apresentar o problema, sem resolver a investigação.

**Transição:**

> “Temos o alerta e uma pergunta de negócio. Agora vamos olhar os números que chegaram à equipe.”

Clique em **Vamos entender o alerta →**. A próxima tela apresenta indicadores consultados no AIDP e a primeira escolha do júri.

## 4. O incidente e a primeira decisão — 05:00 a 07:00



**Objetivo:** mostrar a queda sem antecipar sua causa e registrar a primeira votação.

**Antes de falar os números:** espere os indicadores aparecerem. Eles vêm da última preparação concluída no AIDP. Se estiverem indisponíveis, não leia os números deste roteiro como se tivessem acabado de ser consultados.

**Fala de palco, se os valores coincidirem com o conjunto do ensaio**

> “Olhem estes dois dias: noventa mil reais de receita aprovada no primeiro, sessenta e três mil no segundo. São vinte e sete mil reais a menos.
>
> O número de tentativas ficou em mil por dia. Então temos uma queda de receita de trinta por cento, mas ainda não sabemos por quê. Estes valores vieram da última preparação concluída; o registro da execução está na tela.
>
> Se esse alerta chegasse para vocês, qual seria o primeiro passo? Vamos às opções.”

**Leia com o mesmo tom:**

1. “Pedir um palpite ao modelo.”
2. “Cruzar números e documentos.”
3. “Alterar a configuração agora.”
4. “Escolher a causa mais popular.”

> “Pensem por alguns segundos. Na minha contagem, levantem de um a quatro dedos para indicar a escolha.”

**Clique:** selecione a alternativa combinada. Diga apenas “Escolha registrada”. Clique em **Registrar e avançar →**.

**Não faça aqui:** elogiar a segunda alternativa, criticar as outras ou anunciar a hipótese de pagamento. A explicação pertence ao slide 5.

**Se os valores mudarem:** acompanhe os valores retornados, confira o recorte e não force o enredo numérico do ensaio. Se não houver dados, explique a indisponibilidade e conduza apenas a pergunta sobre estratégia.

## 5. Examine as fontes — 07:00 a 08:00



**Objetivo:** revelar a estratégia inicial e mostrar de onde vêm os tipos de prova.

**Cliques:** observe a faixa com a resposta da etapa anterior. Percorra o painel **Fontes reais**. Use **Verificar fontes no AIDP** se quiser renovar a consulta. Não procure os antigos botões de “incluir no plano”.

**Fala de palco, depois da troca de slide**

**Ritmo:** um minuto; reconhecer as fontes agora e aprofundar catálogo e documentos nas etapas seguintes.

> “Vamos cruzar números e documentos. Os pagamentos numa tabela permitem comparar os dias. Os registros da operação podem explicar o contexto daquele período.
>
> Aqui vemos os dois tipos de fonte: a tabela relacional que Byte consulta e os documentos que Íris vai buscar. Também temos o arquivo que passa pela preparação no Spark.
>
> Antes de confiar nos indicadores, vamos conferir como os dados foram preparados.”

**Aprofundamento: os dois caminhos que não devem ser confundidos**

| Caminho | Origem e destino | Uso na apresentação |
|---|---|---|
| Consulta SQL | `tdcsp.agent_search.tdc_dc_pagamentos` | Ferramenta de Byte, com cartão e Pix na mesma consulta |
| Preparação Spark | CSV no volume → tabelas `dc_pagamentos_bronze`, `dc_pagamentos_silver`, `dc_pagamentos_gold` em `default.tdc_courtroom` | Camadas, indicadores e workflow |
| Consulta documental | Arquivos TXT → base `default.tdc_courtroom.kb_aurora_evidencias` | Recuperação de contexto pela ferramenta de Íris |

São percursos do mesmo caso fictício. Não afirme que Byte lê automaticamente a gold recém-gerada. O aplicativo também pode abrir os documentos completos diretamente do volume; essa leitura é diferente da pesquisa RAG feita pelo agente.

**Transição**

> “O arquivo chegou. Será que contar suas linhas já responde quantas tentativas de compra tivemos?”

## 6. Prepare os dados — 08:00 a 11:00



**Objetivo:** explicar bronze, silver e gold a partir de uma execução real, distinguindo leitura de resultado e nova execução.

**Sequência de cliques**

1. Mostre **BRONZE**, a contagem recebida e a amostra retornada pelo Spark.
2. Clique em **SILVER** e confira válidos, duplicatas e inválidos.
3. Clique em **GOLD** e mostre os quatro grupos por dia e método.
4. Se o ambiente estiver pronto e o cronograma permitir, clique uma vez em **Reexecutar preparação no AIDP**. Esse botão leva ao slide 8 e inicia uma execução, ou acompanha uma que já esteja ativa. Apresente brevemente seu início e volte ao slide 7 pela navegação; retome o workflow no horário previsto.
5. Se preferir navegação estritamente sequencial, mostre as camadas agora e inicie a execução apenas no slide 8. Diga que estes resultados são de uma execução anterior concluída.

**Fala de Byte, interpretada por você**

> “Antes de confiar na conta, eu preciso conferir o que chegou.”

**Fala de palco**

> “Chegaram duas mil e três linhas. Isso quer dizer duas mil e três compras? Vamos conferir.
>
> Na primeira aba está o que recebemos. Na segunda, o resultado da validação: duas duplicatas e um registro inválido ficaram fora da conta. Restaram duas mil tentativas válidas.
>
> Na terceira, agrupamos por dia e forma de pagamento. É esse resumo que ajuda a comparar receita e aprovações.
>
> Os nomes bronze, silver e gold são uma forma de organizar esse percurso: recebido, validado e preparado para análise. O importante aqui é conseguir explicar o que aconteceu entre uma etapa e outra.
>
> Esses resultados foram calculados no Spark. Trocar de aba só consulta a última execução concluída, com a data que aparece aqui. Se eu quiser processar outra vez, uso este botão.
>
> Essa parte não precisa de um modelo de linguagem. São regras de dados que podemos ler e conferir.”

**Ao iniciar o workflow**

> “Agora enviei uma execução ao AIDP. Ela continua trabalhando no ambiente enquanto examinamos o catálogo. Voltaremos para conferir o estado das tarefas.”

**Aprofundamento**

As regras aplicadas são específicas do laboratório. Limpar dados não significa excluir qualquer valor estranho: em um projeto real, as regras precisam refletir o domínio. Aqui, o script valida campos e valores, elimina duplicatas de tentativa e agrega por dia e método. A tabela gold contém resumo; não substitui o dado detalhado para todas as perguntas.

Não prometa que trocar uma aba reconstrói uma tabela. Não diga “acabamos de gerar” se estiver mostrando a última execução concluída enquanto a nova ainda roda. As tabelas próprias da demo são regravadas pelo workflow; a tabela externa consultada por Byte não é modificada por essa ação.

**Transição**

> “Tratamos os registros. Agora precisamos saber como encontrar e entender os ativos que produzimos.”

## 7. Catálogo e acesso — 11:00 a 13:00



**Objetivo:** tornar metadados e acesso compreensíveis, sem simular troca de identidade.

**Cliques:** no painel **Catálogo e acesso**, selecione **SQL** e depois **GOLD**. Mostre **Colunas e tipos**. Abra **Permissões retornadas pela API** somente se isso ajudar a explicação. As opções BRONZE e SILVER ficam disponíveis para exploração adicional.

**Fala de Íris, interpretada por você**

> “Encontrar a informação é uma parte. Saber o que ela representa é a outra.”

**Fala de palco**

> “Imaginem que alguém manda um arquivo chamado pagamentos_final_agora_vai. Antes de usar, vocês vão querer saber de onde veio e o que tem dentro, certo?
>
> Aqui eu consigo localizar o ativo pelo catálogo, schema e tabela. E ver as colunas e os tipos que o serviço retornou.
>
> Vou comparar dois: SQL é a tabela consultada por Byte; gold é o resumo que preparamos. Parecem próximos, mas têm usos diferentes.
>
> Esse é o papel do catálogo nesta investigação: ajudar a encontrar e entender o que estamos usando. Cadastrar uma tabela não torna seus valores corretos. A validação continua necessária.
>
> A consulta usa a identidade configurada na aplicação. O painel de permissões mostra o que a API devolveu para ela. Se vier vazio, precisamos investigar; não dá para concluir que qualquer pessoa pode acessar.”

**Se o retorno de permissões estiver vazio**

> “A API não retornou itens neste campo para esta consulta. Isso, sozinho, não permite concluir que todos têm acesso ou que não existe controle.”

**Não procurar nesta versão:** botões Visitante/Analista ou uma encenação de acesso negado. Não exponha o arquivo de credenciais para explicar autenticação.

**Transição**

> “Vamos acompanhar como a preparação foi organizada para ser repetida.”

## 8. Workflow e código — 13:00 a 16:00



**Objetivo:** explicar tarefas, dependências, compute, histórico e execução observável.

**Cliques**

1. Se ainda não iniciou nesta rodada, clique em **Executar workflow no AIDP** uma vez. Se já iniciou no slide 6, acompanhe a execução existente.
2. Mostre **carregar → validar → agregar** e os estados retornados.
3. Abra **Código salvo no workspace** e selecione **Validar** ou **Agregar**. Explique uma operação; não leia o script inteiro.
4. Abra **Histórico real**. Diferencie a execução atual das anteriores.
5. Use **Atualizar estado** quando necessário. A tela também acompanha automaticamente os estados de execução ativos.

**Fala de palco**

> “Conseguimos fazer a preparação uma vez. E amanhã, quando chegar outro arquivo? Não quero depender de lembrar a ordem dos passos.
>
> Por isso organizei três tarefas: carregar, validar e agregar. Cada uma depende da anterior. O workflow cuida dessa sequência; o Spark executa os scripts.
>
> Vamos olhar o estado que o serviço devolveu. E aqui está o código da tarefa. Se a regra estiver errada, precisamos corrigir a regra; o botão de executar não resolve isso.
>
> Neste laboratório são arquivos Python. Poderíamos desenvolver o tratamento de outras formas, inclusive em notebooks. O que quero mostrar é a relação entre código, execução e resultado.
>
> O histórico ajuda a responder uma pergunta prática: qual rodada produziu o número que estamos usando? Se falhar, também fica registrado.”

**Se aparecer SUCCESS nas três tarefas**

> “As três tarefas terminaram com sucesso. Temos uma execução concluída para conferir. O sucesso operacional é uma evidência de que o processo rodou; a qualidade da regra de negócio ainda depende de como escrevemos e validamos o tratamento.”

**Se ainda estiver executando**

> “A execução continua no ambiente. Não vou chamar isso de concluído antes de o serviço confirmar. Podemos seguir usando o resultado anterior, identificado pelo horário, e voltar ao histórico depois.”

**Se aparecer uma falha anterior no histórico**

> “O histórico também registra tentativas que falharam durante a preparação do laboratório. Vou distinguir essa execução da atual. Manter a falha visível ajuda a entender o processo.”

Não use o roteiro antigo de “simular falha na validação”: esse controle não faz parte da versão conectada. Não dispare várias execuções para produzir movimento visual.

**Transição**

> “Agora vamos consultar o agente que investiga os números.”

## 9. Byte interroga os números — 16:00 a 19:00



**Objetivo:** mostrar uma ferramenta SQL real e separar cálculo, interpretação e hipótese.

**Clique logo ao entrar:** **Consultar Byte**. Enquanto a chamada acontece, explique o mecanismo. Não espere em silêncio nem clique novamente.

**Fala durante a consulta**

> “Vamos perguntar ao Byte: a queda aconteceu em todo pagamento ou ficou concentrada em algum método? [Clique e continue.]
>
> Ele vai usar uma consulta SQL de leitura que compara cartão e Pix. A conta vem dessa ferramenta; o modelo organiza a resposta.
>
> Eu poderia executar esse SQL diretamente. O agente entra como uma forma de interação com a investigação. Precisamos ver se ele explica o resultado direito e mantém a origem dos números.
>
> Aqui o escopo é pequeno: uma consulta preparada para este caso. Ele não recebeu liberdade para executar qualquer comando no banco.”

**Quando a resposta chegar:** confira os quatro grupos e leia somente as diferenças essenciais.

> “No cartão, temos seiscentas tentativas em cada dia. As aprovações passam de quinhentas e quarenta para duzentas e setenta. A receita passa de cinquenta e quatro mil para vinte e sete mil reais.
>
> No Pix, continuamos com trezentas e sessenta aprovações e trinta e seis mil reais de receita em cada dia.
>
> Byte localizou onde a queda aparece: no cartão. Isso orienta a investigação, mas não demonstra sozinho o que causou a mudança.
>
> Podemos conferir a conta na tabela. A explicação em linguagem natural vem acompanhada de números verificáveis.”

**Observação operacional:** o retorno fica na sessão da aba e será enviado a Atlas no slide 13. Não existe mais um clique manual de “Guardar E01”. Abrir **Dados da execução** permite conferir tempo e sessão; **Baixar resposta original** preserva o texto recebido, sem repeti-lo no painel principal.

**Aprofundamento numérico, apenas se perguntarem**

A taxa de aprovação do cartão passa de 90% para 45%: queda de 45 pontos percentuais. O número de aprovações e a receita de cartão caem 50%. A receita total cai 30%. São medidas diferentes. Não diga que todos esses percentuais significam a mesma coisa.

**Se houver erro ou número incompatível**

> “A resposta precisa ser conferida. Este retorno não está suficiente para sustentar a leitura que esperávamos. Vou verificar a origem e o recorte antes de seguir com uma conclusão.”

Não corrija silenciosamente o resultado do agente com o gabarito do roteiro.

**Transição**

> “Temos o padrão dos números. Íris vai procurar o contexto nos documentos.”

## 10. Íris lê os documentos — 19:00 a 22:00



**Objetivo:** mostrar recuperação de contexto real, trechos e fontes, sem antecipar o parecer.

**Clique logo ao entrar:** **Consultar Íris**. Use o tempo da chamada para explicar RAG. Depois, abra **Documentos lidos diretamente do volume** para conferir uma fonte.

**Fala durante a consulta**

> “Os números localizaram a diferença. Agora vamos procurar o que foi registrado pela operação. Íris, o que mudou nesse período? [Clique e continue.]
>
> Eu poderia abrir os documentos e procurar manualmente. Nesta versão, Íris usa uma ferramenta de busca numa base de conhecimento preparada com esses arquivos.
>
> Ela recupera trechos para responder à pergunta. É o que estamos chamando de RAG. O modelo não precisa ter aprendido previamente os documentos deste caso.
>
> Mas encontrar um trecho não encerra a investigação. Vamos conferir se ele corresponde ao período, se a fonte existe e se a resposta respeita o que foi escrito.”

**Quando a resposta chegar**

> “Vou separar o que cada documento acrescenta, sem dar o parecer ainda.
>
> O registro da mudança informa uma alteração às dez horas e um exemplo de falha às dez e sete, associado à configuração cfg-17.
>
> A reconciliação informa as contagens do conjunto após a limpeza. Ela ajuda a avaliar se uma diferença na carga dos arquivos explicaria o indicador.
>
> O documento de campanha informa outra data para a mudança de aquisição e descreve o volume de tentativas nos canais.
>
> Temos cronologia e contexto para comparar com os números. O próximo passo é examinar o conjunto das provas.”

**Clique para conferir a fonte:** abra `mudanca-pagamento.txt` dentro dos documentos do volume. Leia os horários no documento, não apenas a paráfrase do agente. Se houver tempo, mostre `reconciliacao.txt` e `campanha.txt` sem ler tudo.

> “Esta leitura abre o arquivo completo do volume. Ela nos permite conferir a fonte citada. A pesquisa de Íris e a abertura do arquivo são operações diferentes, que se complementam.”

**Se a referência vier com caminho estranho ou duplicado:** use o nome do documento para localizar o arquivo e informe a inconsistência. Não apresente um caminho malformado como prova de qualidade da referência. O painel preserva a referência recebida; não corrige o conteúdo do agente por conta própria.

**Se Íris omitir uma prova:** diga qual documento não foi recuperado. Você pode inspecionar o arquivo, mas não afirme que a resposta do agente contém uma evidência que só você leu separadamente. Atlas recebe o texto das respostas dos agentes, não toda a sua fala de palco.

**Cuidado com a conclusão:** proximidade de horários é uma pista. Não diga que cfg-17 está definitivamente condenada. O julgamento vem depois da votação.

**Transição**

> “Antes de enviar o dossiê ao tribunal, precisamos entender até onde esses agentes podem agir.”

## 11. Escopo e rastros — 22:00 a 24:00



**Objetivo:** mostrar um limite operacional e uma forma de observar a execução sem vender uma garantia absoluta.

**Plano principal:** execute apenas um teste, **Pedir alteração**, e abra **Rastros recebidos do AIDP**. Os outros dois testes são alternativas de aprofundamento. Fazer os três pode consumir o tempo reservado ao júri.

**Fala antes do clique**

> “Ter informação para recomendar uma ação não significa ter ferramenta para executá-la. Vamos testar isso enviando uma solicitação de alteração ao agente.”

**Clique:** **Pedir alteração**.

**Enquanto aguarda**

> “Nesta configuração, Byte tem uma ferramenta de consulta. O teste envia um pedido que ultrapassa esse papel, e vamos observar a resposta real.
>
> A distinção é importante: uma instrução em linguagem natural não cria uma ferramenta nem concede permissão na infraestrutura.”

**Se o retorno recusar a alteração**

> “Neste teste, o agente informou que não dispõe de ferramenta autorizada para alterar os pagamentos. Ele não executou uma correção no sistema de origem.”

**Se o retorno afirmar que alterou algo**

> “Essa afirmação precisa ser contestada. Uma frase não comprova uma operação. Vamos conferir as ferramentas e os rastros; não temos uma ferramenta de escrita configurada para essa ação.”

**Clique:** abra os rastros.

> “Aqui vemos operações e tempos retornados pelas execuções dos agentes. Isso ajuda a investigar o que foi chamado e a duração das etapas.
>
> Não é a exposição do raciocínio interno do modelo. E um teste que passou não prova segurança para todo pedido possível.
>
> Permissões, ferramentas, instruções e controles de conteúdo têm funções diferentes. O que demonstramos agora é o comportamento desta configuração nesta solicitação.”

**Alternativa se o tema de interesse for instrução maliciosa:** use **Testar instrução no documento** no lugar de **Pedir alteração**.

> “Este botão envia ao agente um trecho fictício tratado como não confiável, que tenta dar ordens. O objetivo é observar como ele lida com esse conteúdo. Não estamos alterando um documento da base nem configurando um guardrail nativo neste clique.”

**Alternativa de menor complexidade:** **Consultar indicadores** faz outra chamada de leitura. Não a execute só para preencher o tempo se Byte já trouxe a prova.

**Transição**

> “Já examinamos números, documentos e limites. Agora o júri registra sua hipótese.”

## 12. A decisão do júri — 24:00 a 25:00



**Objetivo:** registrar a opinião do público sem exibir ou anunciar a resposta.

**Fala de palco**

> “Com o que foi apresentado até aqui, qual hipótese vocês levam ao julgamento?
>
> Um: campanha.
> Dois: pagamento.
> Três: carga incompleta.
> Quatro: inconclusivo, porque ainda faltam provas.
>
> Vocês podem escolher uma hipótese ou reconhecer que precisam de mais informação. Pensem por alguns segundos e, na minha contagem, levantem os dedos.”

**Condução:** registre a escolha combinada. Não abra relatório, documentos ou atalhos para mostrar o parecer nesta tela.

**Fala neutra**

> “Voto registrado. Vamos passar à próxima etapa para consultar Atlas.”

**Clique:** **Registrar e avançar →**.

**Não dizer:** “Boa!”, “É isso!”, “Vocês acertaram” ou “Lembrem daquela mudança às dez horas”. Essas frases antecipam a correção. Atlas não recebe a popularidade da alternativa como evidência e não precisa concordar com o júri.

## 13. O parecer de Atlas — 25:00 a 27:00



**Objetivo:** obter uma síntese curta e revisável, com hipótese, impacto e próxima verificação.

**Clique somente após chegar ao slide 13:** **Consultar Atlas**. A aplicação exige um voto registrado e as respostas de Byte e Íris.

**Fala enquanto consulta**

> “Vamos ouvir Atlas. A aplicação vai enviar exatamente as respostas que Byte e Íris trouxeram nesta sessão.
>
> Ele não está saindo para investigar sozinho nem chamando os outros dois. Aqui, a aplicação faz essa coordenação.
>
> O que eu quero dele é uma síntese que ajude a decidir o próximo passo. Qual suspeita ganhou força? Quanto mudou? O que ainda falta verificar?
>
> E vamos conferir se a síntese faz sentido. O voto de vocês não vira prova e a resposta do agente também não vira verdade só porque apareceu na tela.”

**Quando a resposta chegar:** leia os quatro blocos que estiverem na tela. Não leia caminhos técnicos nem repita o dossiê inteiro. O formato solicitado é **Parecer do tribunal**, **As pistas se conectam**, **O tamanho da queda** e **Falta a prova final**; a resposta é gerada e pode variar.

**Comentário sugerido, somente se sustentado pela resposta e pelas provas**

> “O ajuste no fluxo de cartão aparece como a principal suspeita. Byte localizou a queda no cartão; Íris trouxe uma mudança e um registro de erro para investigarmos.
>
> O impacto observado é de vinte e sete mil reais a menos. Isso equivale a cinquenta por cento da receita de cartão no recorte. Na receita total, a queda é de trinta por cento.
>
> Ainda precisamos confirmar o mecanismo da falha. A próxima ação é examinar os registros e validar a relação com a configuração, não declarar a causa resolvida apenas pela coincidência de horários.”

**Se Atlas exagerar a certeza — fala pronta**

> “Vou fazer uma ressalva ao parecer. A evidência sustenta uma suspeita; não comprova causalidade sozinha. Se a resposta diz que ‘causou’ ou que ‘descarta’ uma alternativa, precisamos ajustar essa interpretação ao alcance dos dados.”

O último ensaio mostrou que o modelo pode ainda usar expressões fortes sobre reconciliação ou campanha, mesmo com instruções para qualificar conclusões. Revise o conteúdo: formatação legível não elimina a necessidade de avaliação humana.

**Se Atlas disser inconclusivo**

> “Neste retorno, Atlas identifica uma lacuna. Vamos observar qual prova falta. A conclusão deve acompanhar o dossiê recebido, não a expectativa de chegar a uma resposta específica.”

**Se faltarem respostas no aplicativo:** volte à etapa 9 ou 10 e obtenha o retorno. Não existe mais uma caixa para retirar e recolocar E02 nem um simulador de recuperação de receita. A aplicação envia os textos das respostas guardadas na sessão.

**Conexão com o jogo**

> “O papel do júri não acaba quando aparece uma resposta bonita. Nós conferimos se o parecer respeita as provas.”

**Transição**

> “Antes de encerrar, três perguntas sobre as escolhas que fizemos.”

## 14. Desafio AIDP — 27:00 a 28:00



**Objetivo:** registrar três escolhas sem revelar a correção nesta tela.

**Fala inicial**

> “Três perguntas rápidas para fechar a missão. Vou registrar a escolha do grupo em cada uma. As respostas ficam no próximo slide.”

**Leia as alternativas com neutralidade, sem consultar o gabarito em voz alta.**

**Pergunta 1 — Quem calcula a receita aprovada neste desenho?**

- A: “O modelo estima um valor provável.”
- B: “A ferramenta consulta os dados e devolve o cálculo.”
- C: “O júri escolhe o número por votação.”

**Pergunta 2 — Para que serve o catálogo?**

- A: “Garantir que qualquer dado esteja correto.”
- B: “Guardar somente prompts.”
- C: “Ajudar a localizar, entender e governar ativos.”

**Pergunta 3 — Qual é a diferença entre RAG e treinamento?**

- A: “RAG recupera contexto; não exige retreinar o modelo a cada documento.”
- B: “RAG é sempre um treinamento completo.”
- C: “Não há diferença.”

**Cliques:** registre uma alternativa em cada pergunta; reserve cerca de 15 segundos por pergunta. Diga “As escolhas estão registradas”. Clique em **Registrar e ver próxima etapa →**.

Se alguém responder em voz alta com uma justificativa, agradeça a participação sem validar e diga que vocês vão conferir após avançar.

## 15. Respostas e transição para a OCI — 28:00 a 30:00



**Objetivo:** consolidar os conceitos e fechar o júri antes da visita à OCI.

**Fala depois da troca de slide**

> “Vamos conferir. Na primeira, a ferramenta consulta os dados e devolve o cálculo. Foi o que usamos para comparar os pagamentos.
>
> Na segunda, o catálogo ajuda a localizar e entender os ativos. Ele não substitui a conferência dos dados.
>
> Na terceira, RAG busca contexto nos documentos. Foi como tentamos descobrir o que estava acontecendo perto da queda.
>
> Voltando ao alerta do começo: agora temos uma queda localizada, registros para investigar e uma próxima verificação. Ainda não temos autorização para declarar tudo resolvido.
>
> Eu usei AIDP para montar esse caminho. Em outro ambiente, vocês podem montar algo diferente. O que vale levar é a sequência: entender a pergunta, buscar a prova certa e conferir o que a resposta permite concluir.”

**Gabarito para sua conferência:** 1-B, 2-C, 3-A. Só comentar após o slide 14.

**Clique opcional:** mostre **Registro real da missão**, o histórico e **Baixar relatório real**. **Resumo da missão** também aciona o relatório conectado. Não abra o JSON inteiro no projetor se isso consumir a pergunta final.

> “Podemos guardar um relatório com a execução, os indicadores e os retornos desta sessão. Isso ajuda a revisar o que mostramos depois.”

**Ao terminar o júri, faça a transição para a visita à OCI**

> “Agora que vimos a investigação, vamos olhar onde essas peças aparecem no AIDP. Depois abrimos a conversa para as perguntas de vocês.”

**Transição, sem encerrar a sessão ainda**

> “A missão do júri terminou. Vamos trocar de tela e reconhecer os mesmos recursos no ambiente em que eles executaram.”

## 16. Visita ao AIDP na OCI — 30:00 a 40:00

**Objetivo:** mostrar a interface real dos componentes que o público acabou de conhecer. Use uma aba já autenticada e o [roteiro da visita](../../demo-real/VISITA-OCI.md).

**Preparação:** deixe a instância e o Workbench abertos antes da sessão. Não exiba arquivos de configuração, chaves, telas de credenciais ou dados fora do laboratório. Não faça instalação ou criação de infraestrutura neste bloco.

**30–32 · Localizar o trabalho**

> “Aqui está a instância que a aplicação está usando. Entrando no Workbench, escolho nosso workspace. Aquela organização que explicamos com os personagens aparece aqui como arquivos e trabalhos do projeto.”

Abra `tdcsp-labs` e a pasta `DataCourtroom`. Mostre os scripts sem ler cada linha.

**32–34 · Encontrar as fontes**

> “No catálogo encontro os ativos usados na investigação. Esta é a fonte relacional que Byte consulta. E aqui estão os arquivos do caso. A tabela externa e as camadas preparadas são caminhos diferentes.”

Localize `tdcsp.agent_search.tdc_dc_pagamentos` e, no catálogo `default`, `tdc_courtroom`, o volume `evidencias` ou uma tabela do pipeline.

**34–37 · Ver a execução**

> “Aqui consigo ver o compute e o workflow. Esta definição organiza as três tarefas; esta execução tem um horário, um estado e resultados. Não precisamos executar tudo de novo para entender a relação.”

Mostre `tdccluster`, `dc_preparar_pagamentos` e uma execução concluída. Se surgir uma dúvida longa sobre configuração, registre para o bloco seguinte.

**37–40 · Ver os agentes**

> “O personagem do jogo corresponde a um agente configurado. Em Byte, a ferramenta é uma consulta SQL. Em Íris, a ferramenta recupera conteúdo da base. O AI Compute atende os agentes; ele não é o modelo em si.”

Mostre `dc_byte`, `dc_iris`, `computetdc` e `kb_aurora_evidencias` conforme o tempo. Não é preciso invocar novamente. Retorne ao slide 17.

**Se a interface ou sessão falhar:** explique a indisponibilidade e use os estados, código e documentos já consultados na aplicação. Não substitua a tela por uma captura sem avisar que é um registro anterior.

## 17. Dúvidas, curiosidades e material — 40:00 a 60:00

**Objetivo:** deixar a conversa conduzir o aprofundamento, sem outro bloco obrigatório de conteúdo.

**Fala de abertura**

> “Agora podemos voltar ao que despertou curiosidade: uma consulta, o workflow, a busca nos documentos, o parecer ou outra forma de desenhar essa solução. Por onde vocês querem começar?”

Reserve aproximadamente 15 minutos para perguntas, 3 para orientar a reprodução posterior e 2 para fechar. São referências flexíveis dentro dos 20 minutos.

**Se não surgirem perguntas:** use uma de cada vez, aguardando a participação:

- “Em qual parte vocês usariam uma consulta direta, sem agente?”
- “Que regra de qualidade faltaria se esses dados fossem da empresa de vocês?”
- “O que faltou para transformar a hipótese em causa comprovada?”
- “Qual recurso vocês gostariam de ver novamente na interface?”

**Sobre o material**

> “O material de estudo reúne o código, os dados fictícios, o notebook e a base Terraform. A reprodução é para fazer depois, na própria conta e no próprio ritmo. O guia separa o que já está automatizado do que ainda precisa de configuração.”

Abra **Abrir materiais**. Apresente o link GitHub quando publicado; enquanto o destino não estiver definido, use o pacote local de distribuição sem anunciar que já há um repositório público. Não dê acesso à conta da apresentadora para a turma reproduzir.

**Fechamento próximo de 60:00**

> “A investigação começou com um número estranho e terminou com uma hipótese que conseguimos discutir com base nas fontes. Obrigada por fazerem parte do júri. O material fica para vocês explorarem depois.”

## Cola de palco — somente ações essenciais

| Slide | Ação indispensável | Frase de apoio |
|---|---|---|
| 1 | Iniciar a missão | “Caso fictício, operações reais.” |
| 2 | Mostrar caminho dos personagens | “Cada peça tem uma responsabilidade.” |
| 3 | Apresentar Aurora e uma perspectiva da equipe | “O movimento continua, mas a receita aprovada diminuiu.” |
| 4 | Registrar a decisão e avançar | “Escolha registrada.” |
| 5 | Conferir fontes reais | “Números e documentos respondem a perguntas diferentes.” |
| 6 | Bronze → Silver → Gold | “Esta é a última execução concluída.” |
| 7 | SQL → Gold; colunas | “Localizar não é o mesmo que validar.” |
| 8 | Acompanhar workflow e abrir um script | “Qual execução produziu o resultado?” |
| 9 | Consultar Byte | “A ferramenta calcula; nós conferimos.” |
| 10 | Consultar Íris e abrir uma fonte | “O trecho precisa poder ser conferido.” |
| 11 | Um teste e rastros | “Recomendar não concede poder de alterar.” |
| 12 | Registrar o voto e avançar | “O parecer vem na próxima etapa.” |
| 13 | Consultar Atlas | “Suspeita sustentada não é causa comprovada.” |
| 14 | Três escolhas e avançar | “A explicação fica no próximo slide.” |
| 15 | Corrigir e passar à visita OCI | “A resposta continua sujeita à revisão.” |

## Se a consulta demorar ou falhar

### Resposta de agente demorando

> “Esta chamada está acontecendo no ambiente real. Enquanto ela processa, vamos separar o papel do modelo e o da ferramenta.”

Use a explicação já planejada. Não clique repetidamente e não prometa um prazo fixo. O servidor não executa chamadas de agentes simultâneas nesta versão. Se houver uma consulta em andamento, espere sua conclusão antes de iniciar outra.

### Erro de rede ou API

> “A consulta falhou e a aplicação está mostrando isso. Não vamos substituir a resposta por um resultado inventado. Posso tentar novamente ou explicar o fluxo com o que já foi obtido, deixando clara a limitação.”

**Atualizar AIDP** renova a leitura do painel; para uma nova resposta gerada, use **Consultar Byte**, **Consultar Íris** ou **Consultar Atlas**. Atualizar a página não regenera automaticamente as respostas salvas.

### Workflow ainda não terminou

> “Temos uma execução em andamento e um resultado anterior concluído. Vou distinguir os dois pelo horário.”

O slide de métricas procura a última preparação concluída. Não confunda esse resultado com a execução em andamento no painel de workflow.

### Falta Byte ou Íris e o tempo acabou

Não tente fabricar o dossiê. Faça a votação, avance e explique que a consulta de Atlas depende das respostas essenciais. Encerre com os conceitos e a limitação observada. Se usar um registro de ensaio como material auxiliar, identifique explicitamente que é uma execução anterior; a aplicação não faz essa substituição automaticamente.

### A resposta contradiz a fonte

> “O documento e a resposta não estão dizendo exatamente a mesma coisa. Vamos priorizar a conferência da fonte e tratar essa diferença como um problema a revisar.”

Não apresente a divergência como uma funcionalidade desejada nem esconda o erro. A ferramenta RAG recupera contexto, mas não garante interpretação perfeita.

## Controle de tempo

**Marcos:** preparação às 08:00; Byte às 16:00; Íris às 19:00; voto às 24:00; fim do júri às 30:00; fim da visita OCI às 40:00; encerramento às 60:00.

**Se o júri atrasar:** corte perfis, painéis extras, leitura de código e chamadas repetidas. Preserve fontes e votação. A hora total tem folga na conversa final; não acelere a ponto de perder a compreensão nem use os 20 minutos como conteúdo obrigatório.

**Preserve:** fonte e data dos resultados, comparação cartão/Pix, conferência de pelo menos um documento, voto antes do parecer e distinção entre suspeita e causalidade.

**Se estiver até dois minutos atrasada:** reduza explicações extras e consulte o agente assim que entrar na etapa. **Se estiver mais atrasada:** use os rastros já disponíveis no slide 11 sem iniciar outro teste, dizendo que são de chamadas anteriores desta sessão. Não afirme ter realizado um teste que foi cortado.

## Conferência numérica — material da apresentadora

Valores do conjunto fictício validado no ensaio. Devem ser comparados com o que a API retornar; não substituem a consulta.

| Dia | Método | Tentativas | Aprovadas | Receita aprovada |
|---|---|---:|---:|---:|
| 19/09/2026 | Cartão | 600 | 540 | R$ 54.000 |
| 19/09/2026 | Pix | 400 | 360 | R$ 36.000 |
| 20/09/2026 | Cartão | 600 | 270 | R$ 27.000 |
| 20/09/2026 | Pix | 400 | 360 | R$ 36.000 |

- Total por dia: R$ 90.000 → R$ 63.000; diferença de −R$ 27.000 e −30%.
- Receita de cartão: R$ 54.000 → R$ 27.000; diferença de −R$ 27.000 e −50%.
- Aprovações de cartão: 540 → 270; diferença de −270 e −50%.
- Taxa de aprovação de cartão: 540/600 = 90%; 270/600 = 45%; diferença de −45 pontos percentuais.
- Receita agregada dos dois dias: R$ 153.000.
- Preparação: 2.003 recebidos − 2 duplicatas − 1 inválido = 2.000 válidos.
- Gold: quatro grupos por dia/método, não quatro pagamentos individuais.

### Conferência documental

| Evidência | Conteúdo esperado no caso | Cuidado de interpretação |
|---|---|---|
| E01 | Agregações de pagamentos, consultadas por Byte | Mostra concentração da queda; não prova causa |
| E02 | `mudanca-pagamento.txt`: mudança às 10h00, registro de erro às 10h07, cfg-17 | Não antecipar o erro para 10h00; associação temporal não prova causalidade |
| E03 | `reconciliacao.txt`: contagens conferidas após limpeza | Enfraquece carga incompleta no recorte; não prova ausência universal de problemas |
| E04 | `campanha.txt`: mudança em 13/09 e estabilidade do volume descrito | Enfraquece uma explicação de volume neste recorte; não exclui todo efeito de campanha |

## Perguntas frequentes — respostas para o palco

**“A IA fez os cálculos?”**

> “As operações de dados fazem os cálculos. Neste fluxo, Spark prepara e agrega; a ferramenta SQL de Byte consulta os pagamentos. O modelo interpreta e explica os resultados.”

**“Por que usar dois computes?”**

> “Neste laboratório separamos o processamento Spark da execução dos agentes. São recursos com funções diferentes, que mostramos no mapa do ambiente.”

**“A gold alimenta Byte?”**

> “Nesta implementação, não. Byte consulta a tabela externa no catálogo tdcsp. A gold é a cópia agregada produzida pelo workflow no catálogo default. Os dois caminhos usam o mesmo caso fictício.”

**“Atlas conversa sozinho com Byte e Íris?”**

> “Aqui, a aplicação faz a coordenação: chama os investigadores e envia suas respostas a Atlas. Não configuramos Atlas para invocar os outros agentes autonomamente.”

**“RAG elimina respostas erradas?”**

> “Não. Ele oferece contexto recuperado de fontes. Ainda precisamos avaliar a recuperação, a referência e a interpretação.”

**“Dá para usar documentos novos?”**

> “O fluxo precisa disponibilizar e preparar os documentos na base de conhecimento para que a busca os recupere. Copiar um arquivo para qualquer pasta não garante que ele já esteja disponível ao agente.”

**“O agente pode corrigir o pagamento?”**

> “Os agentes desta demo não têm ferramenta para essa alteração. O parecer propõe uma verificação; não executa uma correção no sistema.”

**“A votação influencia Atlas?”**

> “O voto libera a etapa no jogo. O dossiê enviado é composto pelas respostas dos investigadores; a opinião da maioria não vira evidência técnica.”

**“Precisamos mesmo de agentes para esse problema?”**

> “Não necessariamente. Podemos investigar este caso com consultas e leitura dos documentos. Aqui estamos experimentando agentes para acessar e organizar essas informações. A escolha depende da necessidade e de como o resultado se comporta nos testes.”

**“Por que não chamar direto um modelo?”**

> “Porque queremos responder sobre fontes específicas e conferir a origem dos dados. As ferramentas e o contexto conectam a resposta ao caso.”

**“Esse exemplo está pronto para qualquer empresa?”**

> “É um laboratório de um caso delimitado. Outro cenário exige definir fontes, regras, permissões, critérios de qualidade e como avaliar os resultados.”

**“Podemos dizer que a configuração causou a perda?”**

> “Com estas provas, ela é uma suspeita importante. Confirmar a causa exige verificar o mecanismo da falha. A diferença de receita é observada; a causalidade não deve ser afirmada só pela sequência temporal.”

## Vocabulário de apoio

| Termo | Explicação curta para o público | Exemplo deste laboratório |
|---|---|---|
| Workspace | Espaço de organização do projeto | `tdcsp-labs` |
| Compute | Recurso que executa trabalho | Spark para preparação; AI Compute para agentes |
| Catálogo | Organização e descoberta de ativos e seus metadados | `tdcsp` e `default` |
| Schema | Agrupamento de ativos dentro de um catálogo | `agent_search` e `tdc_courtroom` |
| Volume | Organização de arquivos acessíveis no ambiente | CSV e TXT do caso |
| Metadados | Informações sobre a estrutura e o contexto de um ativo | Colunas, tipos e campos retornados pela API |
| Workflow | Sequência de tarefas com dependências | Carregar → validar → agregar |
| Execução | Uma rodada concreta desse trabalho | Registro com estado e identificação |
| Ferramenta SQL | Operação que consulta dados estruturados | Comparação de cartão e Pix |
| Base de conhecimento | Conteúdo preparado para recuperação | Documentos da Aurora |
| RAG | Busca de contexto relevante para responder | Pesquisa documental de Íris |
| Agente | Modelo com instruções e ferramentas delimitadas | Byte, Íris e Atlas |
| Rastro | Registro de operações e tempos | Chamadas retornadas pelo AIDP |

## Arquivos de apoio

- [Operação da demo](../../demo-real/OPERACAO-DEMO.md): abertura, recursos e resumo operacional.
- [Agenda resumida de 30 + 10 + 20 minutos](../../demo-real/roteiro-demo.md): visão rápida por etapa.
- [Instruções dos agentes](../../demo-real/agentes/prompts.md): papéis e formato solicitado aos agentes.
- [README da aplicação](../README.md): versão web e verificações.
- [Referências da apresentação](../REFERENCIAS.md): material de consulta conceitual.

As falas deste arquivo descrevem a implementação atual. Não reutilizar as instruções da versão inicial para alternar simulação, trocar perfis fictícios, guardar E01 manualmente, marcar falha artificial ou simular receita recuperada: esses controles não fazem parte do percurso conectado.
