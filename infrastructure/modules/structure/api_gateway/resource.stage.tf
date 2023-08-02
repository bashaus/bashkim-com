resource "aws_apigatewayv2_stage" "default" {
  api_id = aws_apigatewayv2_api.http.id
  name   = "default"

  depends_on = [
    aws_apigatewayv2_api.http
  ]
}
