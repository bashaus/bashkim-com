resource "aws_lambda_function" "function" {
  package_type  = "Image"
  function_name = "${var.stack_name}-${var.function_name}"
  image_uri     = "${aws_ecr_repository.ecr.repository_url}:latest"
  timeout       = 10 # seconds
  role          = var.iam_role

  environment {
    variables = var.env
  }

  tracing_config {
    mode = "Active"
  }
}
