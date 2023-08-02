resource "aws_apigatewayv2_integration" "sitemap" {
  api_id           = var.api_id
  integration_type = "AWS_PROXY"

  connection_type           = "INTERNET"
  integration_method        = "POST"
  integration_uri           = module.lambda.invoke_arn
  passthrough_behavior      = "WHEN_NO_MATCH"
  payload_format_version    = "2.0"
  timeout_milliseconds      = 10000
}
