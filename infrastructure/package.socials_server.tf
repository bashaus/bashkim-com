module "package_socials_server" {
  source = "./modules/packages/socials-server"

  stack_name        = terraform.workspace
  api_id            = module.structure_api_gateway.api_id
  api_execution_arn = module.structure_api_gateway.execution_arn
  iam_role          = module.structure_lambda.iam_role_arn

  vpc_subnet_private_id = module.structure_vpc.subnet_private_id
  vpc_subnet_public_id  = module.structure_vpc.subnet_public_id
  vpc_security_group_id = module.structure_vpc.default_security_group_id
}
