module "structure_lambda" {
  source = "./modules/structure/lambda"

  stack_name = terraform.workspace
}
