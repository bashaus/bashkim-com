resource "aws_apigatewayv2_api" "http" {
  name          = var.stack_name
  version       = "1.0.0"
  protocol_type = "HTTP"

  disable_execute_api_endpoint = false
}
