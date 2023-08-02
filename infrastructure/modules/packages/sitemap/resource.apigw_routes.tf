resource "aws_apigatewayv2_route" "robots" {
  api_id    = var.api_id
  route_key = "ANY /robots.txt"
  target    = "integrations/${aws_apigatewayv2_integration.sitemap.id}"
}

resource "aws_apigatewayv2_route" "sitemap_xml" {
  api_id    = var.api_id
  route_key = "ANY /sitemap.xml"
  target    = "integrations/${aws_apigatewayv2_integration.sitemap.id}"
}

resource "aws_apigatewayv2_route" "sitemap_dir" {
  api_id    = var.api_id
  route_key = "ANY /sitemap/{any+}"
  target    = "integrations/${aws_apigatewayv2_integration.sitemap.id}"
}

resource "aws_apigatewayv2_route" "well_known" {
  api_id    = var.api_id
  route_key = "ANY /.well-known/sitemap/{any+}"
  target    = "integrations/${aws_apigatewayv2_integration.sitemap.id}"
}
