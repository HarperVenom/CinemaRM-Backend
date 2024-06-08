const express = require("express");
const cors = require("cors");
const universeRouter = require("./routes/universe.route");
const userRouter = require("./routes/user.router");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");

const app = express();

connectDB();

//middleware
app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use("/api/universes", universeRouter);
app.use("/api/users", userRouter);
