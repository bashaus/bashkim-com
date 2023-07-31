resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = "192.168.0.0/18"
  map_public_ip_on_launch = true

  tags = {
    Name = "${var.stack_name}-subnet-public"
  }
}
