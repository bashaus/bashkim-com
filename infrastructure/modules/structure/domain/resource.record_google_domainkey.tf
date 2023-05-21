resource "aws_route53_record" "record_google_domainkey" {
  zone_id = aws_route53_zone.zone.id
  name    = "google._domainkey.${var.domain_name}."
  type    = "TXT"
  ttl     = 300
  records = [
    "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkt0IrGnxKdwHF7byNswYhBOmDx3Le5im7Vaw7ezFzEeaSq1vGLHcaEZ+SvaVyvIAfxCY4FknFT3QH8+lJpnTivhvpfiKInVtjKPiwiCAIXaSVe9xi5eeU2S9f0rGDm1xNwmwuIxqliLpx85/wcQb88XK7KeHtbWSf1xEmJyJ60hpmNAEZW5VoLvGHr\" \"nW5XCR3+NHKkIGAmPx05aUVnlFlDkComJnyUrjV9+YMEAZKwjI0o/Oz5GNjWyhflaH4YtMMWQBb9vacDMvN6vwfjV6KDy0ahm5V8JXhE7KS60+JpBJue79IWYRPHgI3qh2crgycjOB+XeDj/juE2u77SHipwIDAQAB"
  ]
}
