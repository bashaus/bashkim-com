variable "domain_name" {
  default = "bashkim.com"
}

/* module.app_design_system */

variable "design_system_distribution_domain_name" {
  type = string
}

variable "design_system_distribution_hosted_zone_id" {
  type = string
}

/* module.app_website */

variable "website_distribution_domain_name" {
  type = string
}

variable "website_distribution_hosted_zone_id" {
  type = string
}
