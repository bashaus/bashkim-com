resource "aws_acm_certificate" "certificate" {
  domain_name = "*.bashkim.com"
  provider    = aws.us_east_1
}
