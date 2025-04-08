const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const app = require("./app");

const db = process.env.DB_URL.replace(
  "<db_username>",
  process.env.DB_USERNAME
).replace("<db_password>", process.env.DB_PASSWORD);

mongoose
  .connect(db)
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.log("DB Connection Failed 🚫", err));

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
