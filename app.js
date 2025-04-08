const express = require("express");
const morgan = require("morgan");
const textRouter = require("./routes/textRouter");
const errorController = require("./controllers/errorController");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://ai-text-summary-app-1.onrender.com", // Adjust this if your frontend runs on a different port
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    credentials: true, // Allow cookies and authentication headers
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(`${process.env.URL_PREFIX}/texts`, textRouter);
app.use(errorController);
app.use("*", (req, res) => {
  res.status(404).send("route does not exist");
});

module.exports = app;
