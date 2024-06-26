const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const weightRouter = require("./routes/Weight");
app.use("/weight", weightRouter);
const exerciseRouter = require("./routes/Exercise");
app.use("/exercises", exerciseRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
