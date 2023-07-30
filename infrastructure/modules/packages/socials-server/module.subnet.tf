resource "aws_subnet" "elasticache_subnet" {
  vpc_id            = aws_vpc.elasticache_vpc.id
  cidr_block        = "10.0.0.0/24"
  map_public_ip_on_launch = true

  tags = {
    Name = "${var.stack_name}-elasticache-subnet"
  }
}
