resource "aws_apigatewayv2_route" "socials_server" {
  api_id    = var.api_id
  route_key = "ANY /api/v1/socials-server/{any+}"
  target    = "integrations/${aws_apigatewayv2_integration.socials_server.id}"
}
