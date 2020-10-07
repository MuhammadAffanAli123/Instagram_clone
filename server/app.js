const express = require("express");
const app = express();
const PORT = 1000;
const { MONGOURUI } = require("./Config/Key");
const mongoose = require("mongoose");
require("./models/users");
app.use(express.json())
app.use(require('./routes/auth'))
mongoose.connect(MONGOURUI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to Db");
});

mongoose.connection.on("erorr", () => {
  console.log("connected to Db");
});

app.listen(PORT, () => {
  console.log("Listening the server on ", PORT);
});

// IXffpoqiSr2GaDvN
//mongodb+srv://MuhammadAffanAli:<password>@cluster0.76s6e.mongodb.net/<dbname>?retryWrites=true&w=majority
