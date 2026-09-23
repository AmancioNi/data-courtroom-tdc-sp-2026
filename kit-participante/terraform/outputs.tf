output "aidp_instance_id" {
  value = local.instance_id
}
output "aidp_state" {
  value = local.instance_state
}
output "next_steps" {
  value = [
    "Abrir o Workbench na OCI e confirmar permissões, região e estado.",
    "Disponibilizar compute Spark e importar notebooks/01-investigacao-spark.ipynb.",
    "Executar a célula de diagnóstico ANTES do evento.",
    "Agentes, RAG, dados persistentes e credenciais de fontes exigem preparação adicional; não são criados por este módulo."
  ]
}
