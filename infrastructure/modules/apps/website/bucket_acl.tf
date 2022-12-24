resource "aws_s3_bucket_acl" "bucket" {
  bucket = aws_s3_bucket.bucket.bucket
  acl    = "public-read"
}
