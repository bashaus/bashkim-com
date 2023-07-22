module "app_socials_server" {
  source          = "./modules/packages/socials-server"
  stack_name      = terraform.workspace
}
