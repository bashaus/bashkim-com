module "structure_cdn" {
  source = "./modules/structure/cdn"

  stack_name       = terraform.workspace
  api_id            = module.structure_api_gateway.api_id
  domain_name      = "www.bashkim.com"
  certificate_arn  = module.structure_security.certificate_arn
  website_endpoint = module.package_website.website_endpoint
}
