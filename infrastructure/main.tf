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

provider "aws" {
  region = "eu-west-1"
}

module "app_design_system" {
  source          = "./modules/apps/design-system"
  stack_name      = terraform.workspace
  certificate_arn = "arn:aws:acm:us-east-1:409535992503:certificate/931d3c5c-33c6-410e-a01f-f45176fb0b99"
  domain_name     = "design-system.bashkim.com"
}

module "app_website" {
  source                = "./modules/apps/website"
  stack_name            = terraform.workspace
  certificate_arn       = "arn:aws:acm:us-east-1:409535992503:certificate/931d3c5c-33c6-410e-a01f-f45176fb0b99"
  domain_name           = "www.bashkim.com"
  serverless_api_domain = "j1rzctrvgj.execute-api.eu-west-1.amazonaws.com"
}
