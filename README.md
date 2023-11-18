# Car Dealership Exhibition API

This is a car dealership exhibition API built using Express, Node.js, and MongoDB. It allows you to showcase car information and images.

## Client-side Instructions

1. Clone the repository:

   git clone https://github.com/MahamdSirafi/Car-showroom.git

2. Navigate to the project directory:

   cd Car-showroom

3. Add car images to the "products" folder inside the "images" folder. Alternatively, you can upload the images to a cloud service and update the image URLs in the database accordingly.

4. Access the application through your web browser at `http://localhost:3000`.

## Server-side Instructions

1. Install the required dependencies:

   npm install

2. Start the server:

   npm start

3. The server will run on `http://localhost:3000`.

## API Endpoints

- `GET /car`: Get a list of all cars.
- `GET /car/:id`: Get details of a specific car identified by `id`.
- `POST /car`: Create a new car.
- `PUT /car/:id`: Update details of a specific car identified by `id`.
- `DELETE /car/:id`: Delete a specific car identified by `id`.

Make sure to review the API documentation for more details on request and response formats.

## Setting Up .env File

This guide explains how to set up an `.env` file to configure environment variables.

### Steps

1. Create a new file and name it `.env` in your project directory.

2. Open the `.env` file using any text editor.

3. Add the environment variables and their values to the file. Write each variable on a separate line in the following format:

Here are some examples:

NODE_ENV=development
PORT=3000

DATABASE_LOCAL=mongodb://127.0.0.1:27017/car

## Technologies Used

- Express.js: Fast, unopinionated, minimalist web framework for Node.js
- Node.js: JavaScript runtime environment
- MongoDB: NoSQL document database

## License

This project is licensed under the [MIT License](LICENSE).
