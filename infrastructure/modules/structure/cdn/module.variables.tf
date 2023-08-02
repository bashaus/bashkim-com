variable "stack_name" {
  type = string
}

variable "api_id" {
  type = string
}

variable "api_stage" {
  type = string
  default = "default"
}

variable "certificate_arn" {
  type = string
}

variable "domain_name" {
  type = string
}

variable "website_endpoint" {
  type = string
}
