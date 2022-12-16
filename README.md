# bashkim-com

Portfolio of case studies by Bashkim Isai

- [View website](https://www.bashkim.com/)
- [View design system](https://design-system.bashkim.com/)

## Infrastructure

The AWS infrastructure is controlled via the [Terraform cloud workspace](https://app.terraform.io/app/bashaus/workspaces).

### Setup

Follow the [Terraform installation instructions](https://developer.hashicorp.com/terraform/downloads) specific for the operating system, then follow these instructions from the `infrastructure/` directory.

Login to Terraform and create an API key.

```bash
terraform login
```

Download the resources and state from Terraform.

```bash
terraform init
```

Make any changes to the specification in `infrastructure/`, validate and apply the changes.

```bash
terraform validate
terraform plan
terraform apply
```
