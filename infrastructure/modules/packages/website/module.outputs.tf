output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.bucket_website_configuration.website_endpoint
}
