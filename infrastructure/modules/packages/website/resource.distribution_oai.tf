resource "aws_cloudfront_origin_access_identity" "distribution_oai" {
  comment = "${var.stack_name}-website-oai"
}
