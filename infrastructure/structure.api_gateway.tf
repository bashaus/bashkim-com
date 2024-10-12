module "structure_api_gateway" {
  source = "./modules/structure/api_gateway"

  stack_name = terraform.workspace

  redeployment_triggers = sha1(join(",", concat(
    module.package_sitemap.apigw_schema,
  )))
}
