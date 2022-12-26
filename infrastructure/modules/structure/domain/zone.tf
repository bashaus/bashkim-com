resource "aws_route53_zone" "zone" {
  name          = var.domain_name
  comment       = ""
  force_destroy = false
}
