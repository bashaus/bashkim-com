variable "stack_name" {
  type = string
}

variable "api_execution_arn" {
  type = string
}

variable "function_name" {
  type = string
}

variable "iam_role" {
  type = string
}

variable "log_retention_days" {
  type = number
  default = 3
}

variable "vpc_security_group_ids" {
  type = list(string)
  default = null
}

variable "vpc_subnet_ids" {
  type = list(string)
  default = null
}

variable "env" {
  type = map(string)
}
