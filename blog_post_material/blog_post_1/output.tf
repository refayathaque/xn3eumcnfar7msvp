output "bucket_arn" {
  value = aws_s3_bucket.website_static_files.arn
}

output "bucket_id" {
  value = aws_s3_bucket.website_static_files.id
}

output "bucket_website_endpoint" {
  value = aws_s3_bucket.website_static_files.website_endpoint
}

output "test1" {
  value = aws_s3_bucket.website_static_files.hosted_zone_id
}

output "test2" {
  value = aws_acm_certificate.certificate.domain_validation_options
}

output "test3" {
  value = aws_acm_certificate.certificate.arn
}

# output "test4" {
#   value = aws_route53_record.certificate_validation.fqdn
# }