output "apigw_schema" {
  value = tolist([
    jsonencode(aws_apigatewayv2_integration.sitemap),
    jsonencode(aws_apigatewayv2_route.robots),
    jsonencode(aws_apigatewayv2_route.sitemap_xml),
    jsonencode(aws_apigatewayv2_route.sitemap_dir),
    jsonencode(aws_apigatewayv2_route.well_known),
  ])
}
