# Canix assessment - Persist weighing process

## Context
Canix has formed a partnership with a company that makes scales with built-in RFID scanners. This allows our customers to quickly weigh their products and save the data to a CSV file.

The project is a web application. This is the first stage in importing the data into our system. The app allow a user to upload multiple CSV files, store the data to persistent storage in a DB, and display in the UI some informations.

This project implements the following functionalities:
1. A list of imported products grouped by category.
2. Total/sum weight of imported products in each category in kilograms.
3. The date that the weighing process started for this import.

### Business assumptions
- I assumed that the products displayed in the report are only those loaded in the last import.
- Should be interesting to add validations for the size of the uploaded file, I didn't do it cause I understood that it would be out of scope.
- I decided to perform a request to the backend for upload each selected file, cause that way I can separate the error handling and have greater control of the process, avoiding may impact in network latency and server processing timeout.
- ID for each import was created on the frontend to optimize dev time(avoiding adding other request). I believe would be better perfom request to a POST /imports endpoint that generate new id and save the import in the database, returning the generated id to frontend use in requests. For keep the api respecting a rest contract.
- Even if the files have the same data content, the data will be save duplicated in the DB. I didn't do validations in this scenario cause I assumed that it is not part of the scope.

---
## Getting Started
- Follow this frontend readme to run React app:
- [Frontend Documentation](./canix-front/README.md)
- Follow this backend readme to run Ruby on Rails api:
- [Backend Documentation](./canix-api/README.md)