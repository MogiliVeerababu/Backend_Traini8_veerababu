const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://saikumar:6e46OgIBBop9qTQh@cluster0.lcctcsf.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1); // Exit process if connection fails
    }
};

module.exports = connectDB;