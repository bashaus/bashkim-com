
resource "aws_route53_record" "root" {
  zone_id = aws_route53_zone.zone.id
  name    = "${var.domain_name}."
  type    = "A"

  alias {
    name = "s3-website-eu-west-1.amazonaws.com."
    # @see https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints
    zone_id                = "Z1BKCTXD74EZPE"
    evaluate_target_health = false
  }
}
