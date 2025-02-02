# React Basic Project

## Description
This project is a basic React application that connects to a MongoDB database and serves on a specified port. Follow the instructions below to set up and run the project locally.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repository/react-basic-project.git
   cd react-basic-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the environment file**:
   - Create a `.env` file in the root directory of the project.
   - Add the following variables in the `.env` file:
     ```
     MONGO_URI=your_mongo_uri
     PORT=3000
     ```

4. **Replace `your_mongo_uri`** with your actual MongoDB connection URI.

## Run the App Locally

1. **Build the app**:
   - Run the following command to build the app for production:
     ```bash
     npm run build
     ```

2. **Start the app**:
   - After building, start the app:
     ```bash
     npm run start
     ```

## Additional Information

- The app runs on the port specified in the `.env` file. By default, it will run on `http://localhost:3000`.
- Make sure you have a running MongoDB instance and have updated the `.env` file with the correct Mongo URI.
