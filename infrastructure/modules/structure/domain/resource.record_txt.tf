resource "aws_route53_record" "record_txt" {
  zone_id = aws_route53_zone.zone.id
  name    = "${var.domain_name}."
  type    = "TXT"
  ttl     = 300
  records = [
    "google-site-verification=Lln2uqxXooRd0M1oCZKKROq919YY8D2c6BNuSLvFQSY",
    "v=spf1 include:_spf.google.com ~all"
  ]
}
