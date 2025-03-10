const express = require("express");
const Traini = require("./models/traini");
const connectDB = require("./config/database.js");

const app = express();
app.use(express.json());


app.get("/trainis", async (req, res) => {
    try{
        const trainis = await Traini.find({})
        res.send(trainis);
    }catch(err){
        res.status(404).send(`Error is ${err.message}`)
    }
})

app.post("/traini", async (req, res) => {
    try {
        // Destructuring request body
        const { centerName, centerCode, city, state, pincode, studentCapacity, courses, email, phone } = req.body;

        // Validate required fields
        if (!centerName || !centerCode || !city || !state || !pincode || !studentCapacity || !courses || !email || !phone) {
            return res.status(400).send("All fields are required.");
        }

        // Ensure courses is an array
        if (!Array.isArray(courses)) {
            return res.status(400).send("Courses must be an array.");
        }

        // Create new training center
        const newTraini = new Traini({
            centerName,
            centerCode,
            city,
            state,
            pincode,
            studentCapacity,
            courses,
            email,
            phone
        });

        await newTraini.save();
        res.status(201).send("Traini added successfully.");
    } catch (err) {
        res.status(500).send(`Error: ${err.message}`);
    }
});

// Connect to MongoDB and start the server
connectDB()
    .then(() => {
        console.log("MongoDB Connected.");
        app.listen(3000, () => console.log("Server running on port 3000"));
    })
    .catch((err) => console.error("MongoDB Connection Error:", err));