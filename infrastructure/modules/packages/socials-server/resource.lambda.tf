module "lambda" {
  source = "../../template/lambda"

  stack_name        = var.stack_name
  api_execution_arn = var.api_execution_arn
  function_name     = "socials-server"
  iam_role          = var.iam_role

  env = {
    APP_SOCIALS_SERVER_GITHUB_TOKEN           = "",
    APP_SOCIALS_SERVER_STACK_OVERFLOW_USER_ID = ""
  }
}
