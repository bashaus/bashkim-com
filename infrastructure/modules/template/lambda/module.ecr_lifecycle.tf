resource "aws_ecr_lifecycle_policy" "policy" {
  repository = aws_ecr_repository.ecr.name

  policy = jsonencode({
    rules : [
      {
        rulePriority : 1,
        description : "Keep latest 10 images",
        selection : {
          tagStatus : "untagged",
          countType : "imageCountMoreThan",
          countNumber : 10
        },
        action : {
          type : "expire"
        }
      }
    ]
  })
}
