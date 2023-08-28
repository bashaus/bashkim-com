module "package_sitemap" {
  source = "./modules/packages/sitemap"

  stack_name        = terraform.workspace
  api_id            = module.structure_api_gateway.api_id
  api_execution_arn = module.structure_api_gateway.execution_arn
  iam_role          = module.structure_lambda.iam_role_arn
}
