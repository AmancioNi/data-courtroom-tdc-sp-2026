# O modo existing apenas consulta; não importa nem assume gestão da instância.
data "oci_ai_data_platform_ai_data_platform" "existing" {
  count               = var.mode == "existing" ? 1 : 0
  ai_data_platform_id = var.existing_instance_id
  lifecycle {
    precondition {
      condition     = try(startswith(var.existing_instance_id, "ocid1."), false)
      error_message = "Informe existing_instance_id da SUA conta."
    }
  }
}

# Limite explícito: instância e workspace inicial. Não cria computes, agentes ou dados.
resource "oci_ai_data_platform_ai_data_platform" "lab" {
  count                     = var.mode == "new" ? 1 : 0
  compartment_id            = var.compartment_id
  display_name              = var.display_name
  default_workspace_name    = var.workspace_name
  is_enable_ai_feature      = var.enable_ai
  vector_db_id              = var.enable_ai ? var.vector_db_id : null
  vector_db_admin_secret_id = var.enable_ai ? var.vector_db_admin_secret_id : null
  freeform_tags = {
    Purpose = "TDC-Data-Courtroom"
  }
  lifecycle {
    precondition {
      condition     = try(startswith(var.compartment_id, "ocid1.compartment."), false)
      error_message = "Informe compartment_id da SUA conta para criar a instância."
    }
    precondition {
      condition = !var.enable_ai || (
        try(startswith(var.vector_db_id, "ocid1."), false) &&
        try(startswith(var.vector_db_admin_secret_id, "ocid1.vaultsecret."), false)
      )
      error_message = "Para IA, prepare Lakehouse 26ai+ e seu segredo ADMIN no Vault antes do apply."
    }
  }
}
locals {
  instance_id    = var.mode == "new" ? oci_ai_data_platform_ai_data_platform.lab[0].id : data.oci_ai_data_platform_ai_data_platform.existing[0].id
  instance_state = var.mode == "new" ? oci_ai_data_platform_ai_data_platform.lab[0].state : data.oci_ai_data_platform_ai_data_platform.existing[0].state
}
