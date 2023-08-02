resource "aws_apigatewayv2_deployment" "default" {
  api_id = aws_apigatewayv2_api.http.id

  lifecycle {
    create_before_destroy = true
  }

  triggers = {
    redeployment = var.redeployment_triggers
  }
}
