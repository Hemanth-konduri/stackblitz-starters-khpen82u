const express = require('express');
const { resolve } = require('path');
const mongoose = require("mongoose");
const env = require("dotenv").config();

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(async()=>{
  try{
    await mongoose.connect(process.env.MongoDB_URI);
    console.log("Connected to database");
  }catch(error){
    console.log("Error connecting to database: ", error);
  }
})
