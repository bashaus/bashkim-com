resource "aws_s3_bucket" "bucket" {
  bucket        = "${var.stack_name}-production-website"
  acl           = "public-read"
  force_destroy = false

  website {
    index_document = "index.html"
    error_document = "404/index.html"
    routing_rules = jsonencode(
      yamldecode(
        file("${path.module}/bucket.routing-rules.yaml")
      )
    )
  }
}
