module "structure_vpc" {
  source = "./modules/structure/vpc"

  stack_name = terraform.workspace
}
