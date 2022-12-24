resource "aws_s3_bucket_website_configuration" "bucket" {
  bucket = aws_s3_bucket.bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404/index.html"
  }

  routing_rules = jsonencode(
    yamldecode(
      file("${path.module}/bucket_website_configuration.routing_rules.yml")
    )
  )
}
