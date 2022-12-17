resource "aws_s3_bucket" "bucket" {
  bucket        = "${var.stack_name}-design-system"
  force_destroy = false
}
