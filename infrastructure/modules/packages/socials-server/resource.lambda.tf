module "lambda" {
  source = "../../template/lambda"

  stack_name        = var.stack_name
  api_execution_arn = var.api_execution_arn
  function_name     = "socials-server"
  iam_role          = var.iam_role

  vpc_security_group_ids = [
    var.vpc_security_group_id
  ]

  vpc_subnet_ids = [
    var.vpc_subnet_public_id,
    var.vpc_subnet_private_id
  ]

  env = {
    APP_SOCIALS_SERVER_CACHE_DRIVER           = "redis",
    APP_SOCIALS_SERVER_GITHUB_TOKEN           = "",
    APP_SOCIALS_SERVER_REDIS_HOST             = "",
    APP_SOCIALS_SERVER_STACK_OVERFLOW_USER_ID = ""
  }
}
