resource "aws_nat_gateway" "ngw" {
  allocation_id = aws_eip.nat.id
  subnet_id = aws_subnet.private.id

  tags = {
    Name = "${var.stack_name}-public-nat-gateway"
  }
}
