const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();

//connect to DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors())
app.use("/auth", require("./routes/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server is running"));
