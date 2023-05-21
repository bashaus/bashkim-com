resource "aws_route53_record" "record_mail" {
  zone_id = aws_route53_zone.zone.id
  name    = "${var.domain_name}."
  type    = "MX"
  ttl     = 300
  records = [
    "1 ASPMX.L.GOOGLE.COM.",
    "5 ALT1.ASPMX.L.GOOGLE.COM.",
    "5 ALT2.ASPMX.L.GOOGLE.COM.",
    "10 ASPMX2.GOOGLEMAIL.COM.",
    "10 ASPMX3.GOOGLEMAIL.COM."
  ]
}
