resource "aws_elasticache_subnet_group" "esg" {
  name       = "${var.stack_name}-elasticache-subnet-group"
  subnet_ids = [var.vpc_subnet_private_id]
}
