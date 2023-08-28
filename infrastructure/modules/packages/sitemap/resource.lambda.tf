module "lambda" {
  source = "../../template/lambda"

  stack_name        = var.stack_name
  api_execution_arn = var.api_execution_arn
  function_name     = "sitemap"
  iam_role          = var.iam_role

  env = {
    APP_SITEMAP_BASE_HREF = var.base_href
  }
}
