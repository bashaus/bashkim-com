module "app_design_system" {
  source          = "./modules/packages/design-system"
  stack_name      = terraform.workspace
  domain_name     = "design-system.bashkim.com"
  certificate_arn = module.structure_security.certificate_arn
}
