import express from "express";
import cors from "cors";
import { DB_Connect, User, addUser, getOne, ChatBot } from "./indexing.js";

const app = express();

// Using Middlewares
app.use(express.json());
app.use(cors());

// View engine
app.set("view engine", "pug");

// Default path
app.set("views", "./views");

// Connecting to the Database.
DB_Connect();

// Defining Routes of the api.
app.post("/chat", ChatBot);
app.use("/", User);
app.use("/signup/:user", addUser);
app.use("/signin/:user", getOne);
app.get("*", (req, res) => res.status(404).send("Page Not Found..."));

// Defining the port variable.
const Port = process.env.Port || 4000;

// Starting the server.
app.listen(Port, () => console.log(`Server listening on port ${Port}....`));
