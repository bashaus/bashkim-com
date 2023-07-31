output "vpc_id" {
  value = aws_vpc.vpc.id
  description = "ID of the VPC"
  sensitive = false
}
