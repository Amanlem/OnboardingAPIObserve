terraform {
  backend "s3" {
    bucket         = "your-terraform-state-bucket"
    key            = "fastapi-dashboard/infra/terraform.tfstate"
    region         = "eu-north-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}

provider "aws" {
  region = "eu-north-1"
}