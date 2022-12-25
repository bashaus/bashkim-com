terraform {
  backend "remote" {
    organization = "bashaus"

    workspaces {
      prefix = "bashkim-com-"
    }
  }

  required_version = ">= 0.14.9"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.47.0"
    }
  }
}

module "structure_security" {
  source = "./modules/structure/security"
}

module "app_design_system" {
  source          = "./modules/apps/design-system"
  stack_name      = terraform.workspace
  domain_name     = "design-system.bashkim.com"
  certificate_arn = module.structure_security.certificate_arn
}

module "app_website" {
  source                = "./modules/apps/website"
  stack_name            = terraform.workspace
  domain_name           = "www.bashkim.com"
  serverless_api_domain = "j1rzctrvgj.execute-api.eu-west-1.amazonaws.com"
  certificate_arn       = module.structure_security.certificate_arn
}
