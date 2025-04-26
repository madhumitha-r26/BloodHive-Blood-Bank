const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const DbConnection = require('./DbConnection');
const app = express();

DbConnection()
dotenv.config()
app.use(express.json())
app.use(cors())


const userRouter = require("./router/userRouter");
app.use("/api", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT - ${process.env.PORT}`);
})