module "lambda" {
  source = "../../template/lambda"

  stack_name        = var.stack_name
  api_execution_arn = var.api_execution_arn
  function_name     = "prismic-webhooks"
  iam_role          = var.iam_role

  env = {
    APP_WEBHOOKS_CIRCLE_API_KEY      = "",
    APP_WEBHOOKS_CIRCLE_PROJECT_SLUG = "",
    APP_WEBHOOKS_PRISMIC_SECRET_KEY  = "",
  }
}
