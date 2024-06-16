const express = require("express");
const cors = require("cors");
const universeRouter = require("./routes/universe.route");
const userRouter = require("./routes/user.router");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

//middleware
app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use("/api/universes", universeRouter);
app.use("/api/users", userRouter);

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
