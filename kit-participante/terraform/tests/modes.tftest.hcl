mock_provider "oci" {}
run "existing_is_read_only" {
  command = plan
  variables {
    existing_instance_id = "ocid1.aidataplatform.oc1.test.example"
  }
  assert {
    condition     = length(oci_ai_data_platform_ai_data_platform.lab) == 0
    error_message = "O modo existing não pode criar instância."
  }
}
run "new_requests_initial_workspace" {
  command = plan
  variables {
    mode                      = "new"
    compartment_id            = "ocid1.compartment.oc1.test.example"
    vector_db_id              = "ocid1.autonomousdatabase.oc1.test.example"
    vector_db_admin_secret_id = "ocid1.vaultsecret.oc1.test.example"
  }
  assert {
    condition     = oci_ai_data_platform_ai_data_platform.lab[0].default_workspace_name == "tdc-laboratorio"
    error_message = "A instância deve solicitar o workspace inicial."
  }
}
run "reject_ai_without_dependencies" {
  command = plan
  variables {
    mode           = "new"
    compartment_id = "ocid1.compartment.oc1.test.example"
  }
  expect_failures = [oci_ai_data_platform_ai_data_platform.lab]
}
