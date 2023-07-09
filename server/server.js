const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");

const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

const start = async () => {
  await connectDB();
  app.listen(port, () => console.log(`server is running in port : ${port}`));
};

app.use("/api/auth", require("./routes/authRoute"));
app.use(errorHandler);

start();
