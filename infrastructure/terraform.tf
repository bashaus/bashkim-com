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
