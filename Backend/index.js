import express from "express";
import cors from "cors";
// import {MONGODBURL, PORT} from "./config.js";
import userRoute from "./routes/userRoute.js";
import mongoose from "mongoose";

//remove
const MONGODBURL = "mongodb+srv://looguesser1234:SpQn5d98zT9J5z5T@looguessr.9oneh.mongodb.net/?retryWrites=true&w=majority&appName=looguessr";
const PORT = "5555";

const app = express();

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5555", "http://localhost:5173"],
    method: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use("/user", userRoute);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("hi, welcome")
});

mongoose
    .connect(MONGODBURL)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(PORT, () => {
            console.log(`App is listening to PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

