resource "aws_vpc" "elasticache_vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "${var.stack_name}-elasticache-vpc"
  }
}
