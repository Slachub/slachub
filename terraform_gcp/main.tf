terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.6.0"
    }
  }
}

provider "google" {
  credentials = file(var.credentials)
  project     = var.project
  region      = var.region
}

# Define the Google Cloud instance
resource "google_compute_instance" "example_server" {
  name         = "techreturners-api"
  machine_type = "e2-standard-2" # Instance type, can be changed as per requirements
  zone         = var.region # Change to your desired zone

  boot_disk {
    initialize_params {
      image = "ubuntu-2004-lts" # Debian 10 image, replace with your preferred image
    }
  }

  network_interface {
    network = "default" # Change to your desired network
    access_config {
      // Ephemeral IP
    }
  }

    metadata = {
    ssh-keys = <<-EOT
      pi:${file(".ssh/pi.pub")}
      ramya:${file(".ssh/ramya.pub")}
    EOT
  }
}
