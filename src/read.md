Traini Center Backend

This is the backend for the Traini Center project, built using Node.js, Express.js, and MongoDB.

🚀 Features

RESTful API for managing training centers.

MongoDB database connection using Mongoose.

CRUD operations for training center details.

Input validation and error handling.

📌 Tech Stack

Node.js

Express.js

MongoDB (Atlas or Local)

Mongoose (ODM for MongoDB)

🔧 Setup & Installation

1️⃣ Clone the Repository
https://github.com/MogiliVeerababu/Backend_Traini8_veerababu.git
cd traini-backend

2️⃣ Install Dependencies

npm install

3️⃣ Configure MongoDB Connection

Open config/database.js

Update the MongoDB connection string:

const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.mongodb.net/trainiDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected!");
};

module.exports = connectDB;

Replace <username> and <password> with your MongoDB credentials.

4️⃣ Start the Server

npm start

OR (for live reload using nodemon)

npm run dev

📌 API Endpoints

1️⃣ Create a Training Center

Endpoint: POST /traini

Request Body:

{
    "centerName": "Hyderabad",
    "centerCode": 123456,
    "city": "Hyderabad",
    "state": "Telangana",
    "pincode": 500074,
    "studentCapacity": 30,
    "courses": ["Node.js", "MongoDB", "Express"],
    "email": "veerababu@gmail.com",
    "phone": 9876543210
}

Response:

{ "message": "Traini added successfully." }

2️⃣ Get All Training Centers

Endpoint: GET /trainis

Response:

[
    {
        "_id": "65a123456789",
        "centerName": "Hyderabad",
        "centerCode": 123456,
        "city": "Hyderabad",
        "state": "Telangana",
        "pincode": 500074,
        "studentCapacity": 30,
        "courses": ["Node.js", "MongoDB", "Express"],
        "email": "veerababu@gmail.com",
        "phone": 9876543210,
        "createdOn": "2024-03-10T12:00:00.000Z"
    }
]

⚙ Environment Variables

Create a .env file and add:

MONGO_URI=mongodb+srv://veerababu:LoTlt9Wycu1ibEc7@cluster0.jcjog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=3000

🛠 Available Scripts

npm start     # Start the server
npm run dev   # Start the server with nodemon (live reload)

📜 License

This project is open-source and free to use.


Let me know if you need any modifications! 🚀