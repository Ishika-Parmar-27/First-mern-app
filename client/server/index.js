const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student");
const app = express();
const studentRoutes = require("./routes/studentRoutes");

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("MongoDB Connected ✅");
})
.catch((error) => {
  console.log("MongoDB Error ❌");
  console.log(error);
});

app.use(cors());
app.use(express.json());
app.use("/api", studentRoutes);
// Home Route
app.get("/", (req, res) => {
  res.send("Hello, Ishika, Backend is working 🚀");
});

// Student Route
/*app.get("/student", (req, res) => {
  res.json({
    name: "Ishika",
    age: 20,
    course: "MERN"
  });
});

// POST Route
app.post("/student", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Student received successfully!"
  });
});*/

// Start Server
app.listen(5000, () => {
  console.log("Server Started on Port 5000");
});