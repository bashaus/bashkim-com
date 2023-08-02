output "apigw_schema" {
  value = tolist([
    jsonencode(aws_apigatewayv2_integration.prismic_webhooks),
    jsonencode(aws_apigatewayv2_route.prismic_webhooks),
    jsonencode(aws_apigatewayv2_route.well_known),
  ])
}
