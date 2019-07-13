import 'dotenv/config';
import express from 'express';
import cors from 'cors';
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
// Import routes
let routes = require("./routes")


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
mongoose.connect('mongodb://mongodb:27017/blog', { useNewUrlParser: true});

var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.use(cors());
app.use("/", routes)

//console.log('Hello ever running Node.js project.');
//console.log(process.env.MY_SECRET);
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

