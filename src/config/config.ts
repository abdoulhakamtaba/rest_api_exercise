export const config = {
  "dev": {
    "username": "tabaudacitydev",
    "password": "tabaudacitydev",
    "database": "tabaudacitydev",
    "host": "tabaudacitydev.cgzaqaevp08b.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "tabadev-s3"
  },
  "jwt": {
    "secret": "helloworld"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres"
  }
}
