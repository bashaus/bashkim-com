module "package_website" {
  source = "./modules/packages/website"

  stack_name = terraform.workspace
}
