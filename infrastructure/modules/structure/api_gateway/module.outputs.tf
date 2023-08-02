output "api_id" {
  value = aws_apigatewayv2_api.http.id
}

output "execution_arn" {
  value = aws_apigatewayv2_api.http.execution_arn
}

output "invoke_url" {
  value = aws_apigatewayv2_stage.default.invoke_url
}
