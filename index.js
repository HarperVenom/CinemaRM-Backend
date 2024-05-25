const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const universeRouter = require("./routes/universe.route");
const userRouter = require("./routes/user.router");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/universes", universeRouter);
app.use("/api/users", userRouter);

mongoose
  .connect(
    "mongodb+srv://harpervenom:ompotImW1DAP3aBI@cluster0.nklqh6g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to Database.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000.");
    });
  })
  .catch(console.log("Connection failed."));
