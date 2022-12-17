resource "aws_cloudfront_distribution" "distribution" {
  enabled             = true
  http_version        = "http2"
  price_class         = "PriceClass_100"
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [var.domain_name]

  origin {
    connection_attempts = 3
    connection_timeout  = 10
    origin_id           = "DesignSystemBucket"

    domain_name = aws_s3_bucket.bucket.bucket_regional_domain_name
    s3_origin_config {
      origin_access_identity = "origin-access-identity/cloudfront/${aws_cloudfront_origin_access_identity.distribution.id}"
    }
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    target_origin_id       = "DesignSystemBucket"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = var.certificate_arn
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
}
