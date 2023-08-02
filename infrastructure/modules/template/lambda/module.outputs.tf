output "invoke_arn" {
  value = aws_lambda_function.function.invoke_arn
}

output "ecr_repository_url" {
  value = aws_ecr_repository.ecr.repository_url
}
