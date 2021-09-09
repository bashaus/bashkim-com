terraform {
  backend "remote" {
    organization = "bashaus"
    workspaces {
      name = "bashkim-com"
    }
  }

  required_version = ">= 0.14.9"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }
}

provider "aws" {
  profile = "default"
  region  = "eu-west-1"
}

module "styleguide" {
  source = "./modules/styleguide"

  stack_name = "bashkim-com"
  certificate_arn = "arn:aws:acm:us-east-1:409535992503:certificate/931d3c5c-33c6-410e-a01f-f45176fb0b99"
  domain_name = "styleguide.bashkim.com"
}

module "website" {
  source = "./modules/website"

  stack_name = "bashkim-com"
  certificate_arn = "arn:aws:acm:us-east-1:409535992503:certificate/931d3c5c-33c6-410e-a01f-f45176fb0b99"
  domain_name = "www.bashkim.com"
}
