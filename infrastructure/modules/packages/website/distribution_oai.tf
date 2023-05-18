resource "aws_cloudfront_origin_access_identity" "distribution" {
  comment = "${var.stack_name}-website-oai"
}
