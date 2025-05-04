const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const DbConnection = require('./DbConnection');
const app = express();

DbConnection()
dotenv.config()
app.use(express.json())
app.use(cors(
    {origin: "https://blood-hive-blood-bank.vercel.app/",
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",}
))


const donorRouter = require("./router/donorRouter");
app.use("/api", donorRouter);

app.listen(process.env.PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT - ${process.env.PORT}`);
})