resource "aws_elasticache_subnet_group" "esg" {
  name       = "${var.stack_name}-elasticache-subnet-group"
  subnet_ids = [aws_subnet.private.id]
}
