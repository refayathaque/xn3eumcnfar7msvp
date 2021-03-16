provider "aws" {
  region = var.AWS_REGION
}

resource "aws_s3_bucket" "website_static_files" {
  bucket = var.BUCKET_NAME
  acl    = "public-read"
  policy = data.aws_iam_policy_document.bucket_website_hosting.json
  website {
    index_document = "index.html"
  }
  force_destroy = true
}
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket#static-website-hosting

data "aws_iam_policy_document" "bucket_website_hosting" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    # https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html
    resources = [
      "arn:aws:s3:::${var.BUCKET_NAME}/*"
    ]
  }
}
# https://learn.hashicorp.com/tutorials/terraform/aws-iam-policy#refactor-your-policy

# Upload `index.html` to S3
resource "null_resource" "upload_static_files" {
  provisioner "local-exec" {
    command = "aws s3 cp index.html s3://${var.BUCKET_NAME}"
    // use `sync` for uploading directories
  }

  depends_on = [aws_s3_bucket.website_static_files]
}
# https://docs.aws.amazon.com/cli/latest/userguide/cli-services-s3-commands.html#using-s3-commands-managing-objects-sync

resource "aws_route53_zone" "primary" {
  name = var.DOMAIN_NAME
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.DOMAIN_NAME
  type    = "A"
  alias {
    name                   = aws_s3_bucket.website_static_files.website_domain
    zone_id                = aws_s3_bucket.website_static_files.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "certificate_validation" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = element(aws_acm_certificate.certificate.domain_validation_options.*.resource_record_name, count.index)
  type    = element(aws_acm_certificate.certificate.domain_validation_options.*.resource_record_type, count.index)
  count   = length(aws_acm_certificate.certificate.domain_validation_options)
  records = [element(aws_acm_certificate.certificate.domain_validation_options.*.resource_record_value, count.index)]
  ttl     = 60
}

resource "aws_acm_certificate" "certificate" {
  domain_name       = var.DOMAIN_NAME
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "certificate" {
  certificate_arn         = aws_acm_certificate.certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.certificate_validation : record.fqdn]
}

