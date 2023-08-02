resource "aws_apigatewayv2_route" "prismic_webhooks" {
  api_id    = var.api_id
  route_key = "ANY /api/v1/prismic-webhooks/{any+}"
  target    = "integrations/${aws_apigatewayv2_integration.prismic_webhooks.id}"
}

resource "aws_apigatewayv2_route" "well_known" {
  api_id    = var.api_id
  route_key = "ANY /.well-known/prismic-webhooks/{any+}"
  target    = "integrations/${aws_apigatewayv2_integration.prismic_webhooks.id}"
}
