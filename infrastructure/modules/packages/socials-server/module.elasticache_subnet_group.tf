resource "aws_elasticache_subnet_group" "elasticache_subnet_group" {
  name       = "${var.stack_name}-elasticache-subnet-group"
  subnet_ids = [aws_subnet.elasticache_subnet.id]
}
