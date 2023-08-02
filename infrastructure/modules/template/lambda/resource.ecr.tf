resource "aws_ecr_repository" "ecr" {
  name = "${var.stack_name}-${var.function_name}"

  image_tag_mutability = "MUTABLE"

  encryption_configuration {
    encryption_type = "KMS"
  }
}
