const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const PORT = process.env.PORT || 3000

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(MONGODB_URI, {
    useNewUrlParser:true,
    useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log("App running on port:", PORT);
 });