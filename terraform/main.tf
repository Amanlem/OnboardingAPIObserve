module "ec2_instance" {
  source         = "/modules/ec2"
  instance_name  = var.instance_name
  instance_type  = var.instance_type
  ami_id         = var.ami_id
  key_name       = var.key_name
}

# Optional VPC module if you're not using default VPC
 module "vpc" {
   source = "/modules/vpc"
   vpc_cidr = var.vpc_cidr
 }
