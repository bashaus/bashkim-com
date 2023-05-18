module "app_website" {
  source                = "./modules/packages/website"
  stack_name            = terraform.workspace
  domain_name           = "www.bashkim.com"
  serverless_api_domain = "j1rzctrvgj.execute-api.eu-west-1.amazonaws.com"
  certificate_arn       = module.structure_security.certificate_arn
}
