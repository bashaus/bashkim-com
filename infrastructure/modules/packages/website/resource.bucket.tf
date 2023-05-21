resource "aws_s3_bucket" "bucket" {
  bucket        = "${var.stack_name}-website"
  force_destroy = false
}
