# Data Courtroom — apresentação conectada

**60 minutos, sem hands-on:** 15 etapas de júri em 30 minutos, uma tela de apoio para 10 minutos de visita à OCI e uma para 20 minutos de dúvidas. Três personagens 3D; 17 telas ao todo. Todas as bancadas operacionais consultam o AIDP. Votações e quiz mantêm as respostas na etapa seguinte.

## Abrir

Execute `../demo-real/iniciar-demo-real.cmd` e abra http://127.0.0.1:4178. O terminal fica aberto. A versão atual precisa do servidor autenticado; abrir o HTML isoladamente não oferece operações reais nem gera resultados simulados.

Use `../demo-real/OPERACAO-DEMO.md` como roteiro de palco.

## Arquivos

- `content.js`: narrativa, conceitos e personagens.
- `app.js`: navegação, notas, votos e quiz.
- `aidp-live.js`: interface operacional conectada; não usa resultados sintéticos.
- `styles.css`: identidade visual e adaptação às telas.
- `../demo-real/demo-server.cjs`: acesso local autenticado.
- `../demo-real/live-service.cjs`: consultas AIDP e execução de workflow.

## Validação e limites

A navegação foi conferida com fixtures de API: 17 telas, agenda contínua de 60 minutos e votação sem resposta antecipada. As novas telas 16 e 17 não disparam operações cloud. O material local de dados também foi executado. Consulte `../kit-participante/VALIDACAO.json` e `../VALIDACAO.json`.

Esta cópia depende de configuração na sua conta para obter resultados reais. Consulte `../demo-real/CONFIGURACAO.md` antes de iniciar.

## Reprodução posterior

Abra `materiais.html` para acessar os pacotes preparados para distribuição. O repositório público está em https://github.com/AmancioNi/data-courtroom-tdc-sp-2026. O kit e o código têm escopos distintos, documentados nos respectivos READMEs.
