resource "aws_route53_record" "record_app_website" {
  zone_id = aws_route53_zone.zone.id
  name    = "www.${var.domain_name}."
  type    = "A"

  alias {
    name                   = var.website_distribution_domain_name
    zone_id                = var.website_distribution_hosted_zone_id
    evaluate_target_health = false
  }
}
