const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const DbConnection = require('./DbConnection');
const app = express();

DbConnection();

app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Health check route (put it here)
app.get("/", (req, res) => {
  res.json({
    message: "BloodHive Backend is running successfully!",
    status: "OK"
  });
});

// Then mount the routers
const donorRouter = require("./router/donorRouter");
app.use("/api", donorRouter);

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT - ${PORT}`);
  });
}

module.exports = app;