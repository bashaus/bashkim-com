resource "aws_eip" "nat" {
  depends_on = [aws_internet_gateway.igw]

  tags = {
    Name = "${var.stack_name}-nat-elastic-ip"
  }
}
