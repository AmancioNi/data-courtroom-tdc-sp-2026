# Data Courtroom: o Julgamento da Anomalia

Um problema de negócio, três investigadores e um júri. Jogo para entender como dados, documentos e ferramentas podem apoiar uma decisão. Caso Aurora fictício; a versão integrada consulta Oracle AI Data Platform.

**Sessão:** 30 minutos de júri, 10 de visita à OCI/Workbench e 20 de dúvidas. Sem hands-on durante o evento. Este material é para reprodução posterior, no seu ritmo.

Antes dos indicadores e da primeira votação, o slide 3 apresenta a Aurora, o alerta do Financeiro e as perspectivas da equipe.

## Downloads

- [Kit de estudo: dados, documentos, notebook e Terraform](https://github.com/AmancioNi/data-courtroom-tdc-sp-2026/releases/download/tdc-sp-2026-v2/Data-Courtroom-kit-participante.zip).
- [Código completo da aplicação e guias](https://github.com/AmancioNi/data-courtroom-tdc-sp-2026/releases/download/tdc-sp-2026-v2/Data-Courtroom-codigo.zip).
- [Página da versão do TDC SP 2026](https://github.com/AmancioNi/data-courtroom-tdc-sp-2026/releases/tag/tdc-sp-2026-v2).

## Comece aqui

| Objetivo | Material | Requisito |
|---|---|---|
| Conferir dados e documentos | [Kit](kit-participante/README.md), `python kit-participante/laboratorio_local.py` | Python 3, sem nuvem |
| Executar processamento no AIDP | [Notebook Spark](kit-participante/notebooks/01-investigacao-spark.ipynb) | Seu workspace e compute Spark |
| Preparar uma instância | [Terraform](kit-participante/terraform/) | Sua conta OCI e dependências descritas no kit |
| Conectar a aplicação completa | [Configuração](demo-real/CONFIGURACAO.md) | Banco, catálogo, pipeline, base documental, AI Compute e agentes configurados |

## Aplicação integrada

Depois de seguir a configuração e preencher os arquivos locais:

```sh
npm install
npm start
```

Abra http://127.0.0.1:4178. Use Node.js 22 ou posterior. O servidor fica restrito à máquina local; as credenciais não vão para o navegador. GitHub Pages sozinho não executa esta integração, pois ela precisa do servidor autenticado.

O jogo tem 17 telas e três personagens: Byte consulta SQL, Íris recupera documentos e Atlas revisa o dossiê enviado pela aplicação. Votações e quiz são locais, operados pela apresentadora; respostas aparecem somente na etapa seguinte. O navegador não coleta votos individuais da plateia.

## Alcance e validação

Em 23/09/2026, o ambiente da apresentação passou por ensaio real: os três agentes responderam e o workflow concluiu carregar, validar e agregar. Os resultados foram conferidos: 2.003 registros recebidos, 2.000 válidos e receita agregada de R$ 153.000 nos dois dias.

O kit local foi executado e os resultados foram conferidos. Terraform foi validado estaticamente e com provider simulado; não foi aplicado na conta de um participante. O notebook teve sintaxe validada, sem execução em um segundo Spark. A cópia pública do servidor usa configurações de exemplo: sua conexão completa precisa ser validada na conta de destino.

O Terraform não cria IAM, Lakehouse, computes, catálogo externo, base indexada ou agentes. O código é material de estudo com configuração manual; não é um instalador automático de toda a demo. Não foram incluídos logs de execução, credenciais, endpoints privados nem identificadores da conta da apresentadora.
