variable "credentials" {
  description = "Terraform Credentials"
  default     = "[YOUR PRIVATE KEY LOCATION]"
  #ex: if you have a directory where this file is called keys with your service account json file
  #saved there as my-creds.json you could use default = "./keys/my-creds.json"
}


variable "project" {
  description = "GCP Project"
  default     = "noble-velocity-411717"
}

variable "region" {
  description = "Region"
  #Update the below to your desired region
  default     = "us-east1-b"
}

variable "location" {
  description = "Project Location"
  #Update the below to your desired location
  default     = "US"
}