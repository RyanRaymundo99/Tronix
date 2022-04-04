const express = require("express");
const app = express();
const mongoose = require("mongoose");
const doteenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")

doteenv.config();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
  }

  app.use("/api/auth", authRoute)
  app.use("/api/users", userRoute)

app.listen( 8800, ()=>{
    console.log("hello")
})