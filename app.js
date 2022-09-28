const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cron = require("node-cron");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send({ message: `Server is running on the ${port}` });
});

// cron job scheduling
cron.schedule("* * * * * *", () => {
  console.log("5 seconds passed");
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}.`);
});
