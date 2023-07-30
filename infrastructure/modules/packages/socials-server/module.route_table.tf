resource "aws_route_table" "route_table" {
  vpc_id = aws_vpc.elasticache_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.internet_gateway.id
  }

  tags = {
    Name = "${var.stack_name}-elasticache-route-table"
  }
}
