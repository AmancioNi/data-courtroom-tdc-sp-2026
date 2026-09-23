# Reproduza depois — Data Courtroom

**Material para estudo depois do evento, no seu ritmo.** A sessão ao vivo tem 30 minutos de júri, 10 de visita à OCI e 20 de conversa, sem hands-on. Para acompanhar, você não precisa de conta OCI nem de instalação. Para reproduzir na nuvem depois, use sua própria conta.

## O que este kit entrega

| Item | Entrega | Limite |
|---|---|---|
| `terraform/` | Consulta uma instância existente ou cria uma instância AIDP com workspace inicial | Não cria IAM, Lakehouse, Vault, computes, tabelas, RAG ou agentes |
| `notebooks/01-investigacao-spark.ipynb` | Preparação e análise do caso no Spark da conta do participante | Precisa de Workbench e compute prontos; não chama Byte/Íris/Atlas |
| `dados/` e `documentos/` | Dados fictícios e fontes do caso | Não são dados empresariais |
| `laboratorio_local.py` | Prática local em Python, sem dependências adicionais | Não consulta AIDP; serve como plano B explicitamente local |

A demo projetada continua conectada ao ambiente real da apresentadora. A reprodução na sua conta usa suas próprias credenciais. O termo “notebook” abaixo significa o arquivo de código `.ipynb`; o computador do participante é apenas o equipamento usado para acessá-lo.

## Escolha por onde começar depois do evento

**A — AIDP e compute já disponíveis:** importar o notebook, associar o compute e executar a célula de diagnóstico. Não é necessário usar Terraform para recriar o ambiente.

**B — Nova instância na própria conta:** usar o Terraform abaixo após preparar permissões e dependências. Provisionamento não tem duração garantida. Planeje capacidade e custos da própria conta antes de criar os recursos.

**C — Começar pelos dados, sem nuvem:** execute `python laboratorio_local.py` na pasta deste kit para conferir o caso localmente. Depois migre para o percurso Spark, se quiser experimentar o processamento no AIDP.

## Terraform — instância

Pré-requisitos: Terraform >= 1.7 e < 2, perfil OCI local do próprio participante, região com serviço disponível e permissões no compartment escolhido. O provider está fixado em `oracle/oci 8.23.0`, com lockfile.

1. Entre na pasta `terraform`.
2. Copie `terraform.tfvars.example` para `terraform.tfvars` e substitua os campos usando **sua conta**.
3. Por padrão, `mode="existing"` apenas consulta uma instância e não assume gestão sobre ela.
4. Para criar uma instância, use `mode="new"`, informe compartment e nome. Com IA habilitada, este módulo exige um Autonomous AI Lakehouse 26ai+ e um segredo ADMIN no Vault já preparados. Use os OCIDs desses recursos; não cole senha no arquivo.
5. Execute:

```text
terraform init
terraform validate
terraform plan -out=lab.tfplan
terraform apply lab.tfplan
```

Leia o plano antes de aplicar. A configuração não inclui criação de políticas IAM: permissões precisam ser revisadas pelo responsável pela conta. Criar AIDP não implica compute iniciado ou agentes publicados.

`enable_ai=false` permite solicitar uma instância para o percurso de dados, sem habilitar as capacidades de IA; não serve para reproduzir o percurso de agentes/RAG. A disponibilidade efetiva depende da configuração aceita pelo serviço.

Não use os IDs do ambiente da apresentadora nem execute `terraform import` sobre ele. Não distribua `terraform.tfvars`, chaves, planos ou state. O plano salvo deve ser reaplicado apenas na conta para a qual foi gerado.

## Para executar o notebook Spark

1. Abra a instância no console OCI e entre no Workbench.
2. Confirme o workspace e as permissões.
3. Disponibilize um compute Spark conforme a capacidade e as políticas da sua conta; associe-o ao notebook. Este módulo não provisiona o cluster.
4. Importe `notebooks/01-investigacao-spark.ipynb` no workspace. A documentação suporta importação de `.ipynb`.
5. Execute a seção **0. Diagnóstico**. Deve retornar versão Spark e contagem 3.
6. Siga as seções 1 a 5 na ordem, lendo a pergunta antes de executar cada célula. Salve suas observações e compare com as evidências.

O CSV está embutido no notebook para dispensar upload de volumes, caminho de Object Storage, banco externo ou segredo da apresentadora. Os resultados são DataFrames na sessão do seu Spark, sem tabelas persistentes. Isso reduz a preparação necessária para praticar processamento; não replica a infraestrutura completa da demo.

## Percurso de estudo, sem cronômetro

| Passo | Executar | Conferir |
|---|---|---|
| 1 — Entender a entrada | Seção 1 do notebook | O que cada linha representa |
| 2 — Preparar | Seção 2 | 2.003 recebidos, 2 duplicatas, 1 inválido, 2.000 válidos |
| 3 — Comparar | Seção 3 | Receita de cartão R$ 54.000 → R$ 27.000; Pix R$ 36.000 nos dois dias |
| 4 — Buscar contexto | Seção 4 e documentos | Cronologia e trechos; distinguir correlação e causa |
| 5 — Registrar conclusão | Seção 5 | Observação, hipótese, limitação e próxima verificação |

O código Spark pessoal não é a ferramenta SQL de Byte. A leitura direta do TXT não é RAG. A soma da receita dos dois dias é R$ 153.000; a receita total diária cai de R$ 90.000 para R$ 63.000. Não confunda os −30% no total com os −50% do cartão.

## E para reproduzir também agentes e RAG?

Esse é um segundo nível de reprodução, depois de conferir os dados. A Oracle documenta **Bundles e CI/CD em preview** para transportar jobs e agentes entre ambientes por pastas Git. O pacote precisa ser gerado no workspace de origem e validado no destino, com as dependências e credenciais adequadas.

Este kit **não contém um bundle exportado nem um clone completo dos três agentes**. A demo utiliza catálogo externo, dados no banco, volume, base indexada, AI Compute e ferramentas. Não basta transportar o prompt. Esta distribuição contém apenas exemplos de configuração da integração. O guia `demo-real/CONFIGURACAO.md` explica os recursos que você precisa preparar; não há instalador completo dos agentes.

Para promover o percurso completo: gerar um bundle nativo, revisar suas dependências, parametrizar destinos e credenciais, preparar fonte relacional e documentos na conta de destino e ensaiar implantação e invocação nessa segunda conta. Até essa validação, considere o notebook e a análise local os percursos de reprodução preparados neste kit; a integração completa exige configurar e testar os recursos de destino.

## Encerramento e limpeza

O notebook não grava tabelas persistentes. Encerre a sessão e pare computes que não serão usados. Recursos criados pelo Terraform permanecem até serem removidos.

Para remover apenas a nova instância gerida por este módulo, na mesma pasta e com o mesmo state:

```text
terraform plan -destroy -out=limpeza.tfplan
terraform apply limpeza.tfplan
```

Isso pode remover a instância e afetar seu conteúdo: use somente para o ambiente descartável que você criou. O modo `existing` não gere a instância consultada. Lakehouse, Vault e computes não geridos pelo módulo exigem revisão própria; não suponha que foram removidos junto.

## Validação realizada neste kit

- `terraform fmt`, `init` e `validate`: passaram.
- `terraform test`: 3 testes com provider simulado; não fazem chamadas para criar recursos.
- Todas as células de código do notebook passaram na análise de sintaxe.
- Plano B executado: 2.003 registros recebidos, 2.000 válidos e quatro grupos com receita total de R$ 153.000.
- **Não realizado:** `terraform apply` em conta de participante nem execução do notebook no Spark dessa conta. A validação estática não garante quota, permissão ou disponibilidade regional.

## Fontes

- [Recurso Terraform AIDP](https://docs.oracle.com/en-us/iaas/tools/terraform-provider-oci/latest/docs/r/ai_data_platform_ai_data_platform.html).
- [Requisitos para recursos de IA](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/get-started-oracle-ai-data-platform.html).
- [Importação e execução de notebooks](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/notebooks.html).
- [Bundles e CI/CD — preview](https://docs.oracle.com/en/cloud/paas/ai-data-platform/aidug/git-bundles-oracle-ai-data-platform.html).
