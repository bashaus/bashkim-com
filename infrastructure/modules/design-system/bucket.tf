resource "aws_s3_bucket" "bucket" {
  bucket        = "${var.stack_name}-production-design-system"
  force_destroy = false
}
