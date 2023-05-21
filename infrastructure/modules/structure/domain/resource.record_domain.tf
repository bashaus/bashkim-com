resource "aws_route53_record" "record_domain" {
  zone_id = aws_route53_zone.zone.id
  name    = "${var.domain_name}."
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.bucket_domain.website_domain
    zone_id                = aws_s3_bucket.bucket_domain.hosted_zone_id
    evaluate_target_health = false
  }
}
