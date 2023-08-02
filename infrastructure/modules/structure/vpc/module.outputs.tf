output "vpc_id" {
  value = aws_vpc.vpc.id
}

output "subnet_private_id" {
  value = aws_subnet.private.id
}

output "subnet_public_id" {
  value = aws_subnet.public.id
}

output "default_security_group_id" {
  value = aws_vpc.vpc.default_security_group_id
}
