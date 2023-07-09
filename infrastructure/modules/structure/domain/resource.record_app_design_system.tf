resource "aws_route53_record" "record_app_design_system" {
  zone_id = aws_route53_zone.zone.id
  name    = "ui.${var.domain_name}."
  type    = "A"

  alias {
    name                   = var.design_system_distribution_domain_name
    zone_id                = var.design_system_distribution_hosted_zone_id
    evaluate_target_health = false
  }
}
