output "bucket_arn" {
  value = aws_s3_bucket.website_static_files.arn
}

output "bucket_id" {
  value = aws_s3_bucket.website_static_files.id
}

output "bucket_website_endpoint" {
  value = aws_s3_bucket.website_static_files.website_endpoint
}

output "route_53_hosted_zone" {
  value = aws_s3_bucket.website_static_files.hosted_zone_id
}

output "certificate_arn" {
  value = aws_acm_certificate.certificate.arn
}

output "certificate_domain_validation_options" {
  value = aws_acm_certificate.certificate.domain_validation_options
}