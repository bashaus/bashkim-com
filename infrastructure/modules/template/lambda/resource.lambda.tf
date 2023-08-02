resource "aws_lambda_function" "function" {
  package_type = "Image"
  function_name = "${var.stack_name}-${var.function_name}"
  image_uri = "${aws_ecr_repository.ecr.repository_url}:latest"
  timeout = 10 # seconds

  environment {
    variables = var.env
  }

  tracing_config {
    mode = "Active"
  }

  vpc_config {
    security_group_ids = var.vpc_security_group_ids
    subnet_ids = var.vpc_subnet_ids
  }

  role = var.iam_role
}
