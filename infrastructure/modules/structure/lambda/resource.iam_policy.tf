data "aws_iam_policy_document" "iam_lambda_policy" {
  statement {
    effect = "Allow"
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
      "logs:TagResource",
    ]

    resources = [
      "arn:aws:logs:*:*:log-group:/aws/lambda/${var.stack_name}*:*"
    ]
  }

  statement {
    effect = "Allow"

    actions = [
      "xray:PutTelemetryRecords",
      "xray:PutTraceSegments"
    ]

    resources = ["*"]
  }
}

resource "aws_iam_policy" "iam_lambda_policy" {
  name        = "${var.stack_name}-lambda-policy"
  description = "IAM policy for logging from a lambda"
  policy      = data.aws_iam_policy_document.iam_lambda_policy.json
}
