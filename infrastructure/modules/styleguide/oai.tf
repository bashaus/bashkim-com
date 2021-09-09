resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "${var.stack_name}-styleguide-oai"
}
