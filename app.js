const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

// load environment variables
const dotenv = require("dotenv");
dotenv.config();


const apiUrl = process.env.API_URL;

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.options("*", cors());


const productRouter = require("./routers/product");
const categoryRouter = require("./routers/categories");
const orderRouter = require("./routers/orders");
const userRouter = require("./routers/users");

// Routers
app.use(`${apiUrl}/products`, productRouter);
app.use(`${apiUrl}/categories`, categoryRouter);
app.use(`${apiUrl}/orders`, orderRouter);
app.use(`${apiUrl}/users`, userRouter);


// connect to mongodb
mongoose.connect(process.env.CONNECTION_STRING).then(() => {
  console.log("connected to mongodb");
}).catch((err) => {
  console.log('error connecting to mongodb', err);
});

app.listen(3000, () => {
  console.log("server is running on port http://localhost:3000");
});
