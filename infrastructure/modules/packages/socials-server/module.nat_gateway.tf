resource "aws_nat_gateway" "gateway" {
  allocation_id = aws_eip.nat.id
  subnet_id = aws_subnet.elasticache_subnet.id

  tags = {
    Name = "${var.stack_name}-elasticache-nat-gateway"
  }
}
