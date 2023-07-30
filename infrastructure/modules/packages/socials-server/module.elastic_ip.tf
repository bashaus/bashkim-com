resource "aws_eip" "nat" {
  depends_on = [aws_internet_gateway.internet_gateway]

  tags = {
    Name = "${var.stack_name}-elasticache-nat-elastic-ip"
  }
}
