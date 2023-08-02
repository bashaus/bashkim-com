variable "stack_name" {
  type = string
}

variable "api_id" {
  type = string
}

variable "api_execution_arn" {
  type = string
}

variable "iam_role" {
  type = string
}

variable "base_href" {
  type = string
  default = "https://www.bashkim.com"
}

variable "vpc_security_group_id" {
  type = string
}

variable "vpc_subnet_public_id" {
  type = string
}

variable "vpc_subnet_private_id" {
  type = string
}
