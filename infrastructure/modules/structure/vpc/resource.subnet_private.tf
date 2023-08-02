resource "aws_subnet" "private" {
  vpc_id     = aws_vpc.vpc.id
  cidr_block = "192.168.64.0/18"

  tags = {
    Name = "${var.stack_name}-subnet-private"
  }
}
