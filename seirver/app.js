//1)
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const errorGlobal = require("./controllers/errorController");
const morgan = require("morgan");
const cors = require("cors");
//2)
const carRouter = require("./routes/carRouter");
//3)
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/", carRouter);
app.use("/api/v1.0.0/car", carRouter);
app.use(errorGlobal);
//4)
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Example app listening at http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
