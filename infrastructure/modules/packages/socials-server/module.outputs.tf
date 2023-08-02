output "apigw_schema" {
  value = tolist([
    jsonencode(aws_apigatewayv2_integration.socials_server),
    jsonencode(aws_apigatewayv2_route.socials_server),
  ])
}
