resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.elasticache_vpc.id

  tags = {
    Name = "${var.stack_name}-internet-gateway"
  }
}
