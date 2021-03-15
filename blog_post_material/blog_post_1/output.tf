output "bucket_arn" {
  value = aws_s3_bucket.website_static_files.arn
}

output "bucket_id" {
  value = aws_s3_bucket.website_static_files.id
}

output "bucket_website_endpoint" {
  value = aws_s3_bucket.website_static_files.website_endpoint
}