variable "region" {
  description = "Região habilitada para AIDP na conta do participante."
  type        = string
  default     = "us-chicago-1"
}
variable "oci_profile" {
  description = "Perfil OCI local do próprio participante; não compartilhar chaves."
  type        = string
  default     = "DEFAULT"
}
variable "mode" {
  description = "existing consulta uma instância; new cria uma instância e workspace inicial."
  type        = string
  default     = "existing"
  validation {
    condition     = contains(["existing", "new"], var.mode)
    error_message = "Use existing ou new."
  }
}
variable "existing_instance_id" {
  type        = string
  default     = null
  description = "OCID de uma instância existente na sua conta, para mode=existing."
}
variable "compartment_id" {
  type        = string
  default     = null
  description = "Compartment da própria conta, necessário para mode=new."
}
variable "display_name" {
  type    = string
  default = "tdc-data-courtroom"
}
variable "workspace_name" {
  type    = string
  default = "tdc-laboratorio"
}
variable "enable_ai" {
  type        = bool
  default     = true
  description = "Solicita habilitar IA na nova instância; exige Lakehouse e segredo existentes."
}
variable "vector_db_id" {
  type        = string
  default     = null
  description = "OCID de Autonomous AI Lakehouse 26ai+ já preparado. Não é criado por este módulo."
}
variable "vector_db_admin_secret_id" {
  type        = string
  default     = null
  description = "OCID de segredo OCI Vault com credencial ADMIN do Lakehouse; não a senha."
}
