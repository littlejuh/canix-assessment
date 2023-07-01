# Canix weighing API

Api for handle weighing data 

[![API Pipeline](https://github.com/littlejuh/canix-assessment/actions/workflows/api-pipeline.yml/badge.svg)](https://github.com/littlejuh/canix-assessment/actions/workflows/api-pipeline.yml)

## Getting Started

### Dependencies

- [Ruby >= 3.0.0](https://ruby-doc.org/ "ruby")
- [Bundler package manager](https://bundler.io/ "bundler")
- [Docker](https://docs.docker.com/get-docker/ "docker")

### Installation
Make sure install dependencies before usage use the following command:
  - `make build`
### First time usage
To setup and start the development server, use the following command:
  - `make first-time-run`

This will start the Puma development server. Perform request to `http://localhost:3001` to access the api.

### Scripts
- Build project(install dependencies):
  - `make build`
- First time run:
  - `make first-time-run`
- Run:
  - `make start`
- Run tests(units with rspec):
  - `make test`
- Run static analysis(rubocop w/ automatic fix):
  - `make lint`
---
