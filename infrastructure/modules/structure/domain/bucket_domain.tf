resource "aws_s3_bucket_website_configuration" "bucket_domain" {
  bucket = aws_s3_bucket.bucket_domain.bucket

  redirect_all_requests_to {
    host_name = "www.${var.domain_name}"
    protocol  = "https"
  }
}

resource "aws_s3_bucket" "bucket_domain" {
  bucket        = var.domain_name
  force_destroy = false
}
