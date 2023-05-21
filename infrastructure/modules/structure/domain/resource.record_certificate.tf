resource "aws_route53_record" "record_certificate" {
  zone_id = aws_route53_zone.zone.id
  name    = "_41774b6af1c0770ba7a50796c65924d5.${var.domain_name}."
  type    = "CNAME"
  ttl     = 300
  records = [
    "_208bf656a118beebdb2f529632019324.nhqijqilxf.acm-validations.aws."
  ]
}
