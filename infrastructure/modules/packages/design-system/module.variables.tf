variable "stack_name" {
  type = string
}

variable "certificate_arn" {
  type    = string
  default = ""
}

variable "domain_name" {
  type    = string
  default = "design-system.bashkim.com"
}
