import express from 'express';
import mongoose from 'mongoose';
const cors = require('cors');

import {dbURI} from "./Configs/dbConfig";

export const app = express();
app.use(cors());
app.use(express.json());

// DB connection
mongoose.connect(dbURI)
.then(() => console.log("connected to DB"))
.catch((err) => console.log("DB Connection error ->", err ));

app.get("/healthCheck", (req, res) =>{
    res.send("server is up and running");
});

const userRouter = require("./routes/UserRouter");

app.use("/api/user",  userRouter);

app.listen(3001, () => {
    console.log("server is running in port 3001");
});

