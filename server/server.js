require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
require("./db/mongoose");
const User = require("./models/User");
const userRouter = require("./controllers/user");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

const allowlist = ["http://localhost:3000"];
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

// Add after Express middleware
app.use("/api", userRouter);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
