require("dotenv").config();
require("./models/Post");
const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// DB connection
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
