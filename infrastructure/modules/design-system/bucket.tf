resource "aws_s3_bucket" "bucket" {
  bucket        = "${var.stack_name}-production-design-system"
  acl           = "private"
  force_destroy = false

  website {
    index_document = "index.html"
  }
}
