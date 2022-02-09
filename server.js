const express = require("express");

const app = express();

const body_parser = require("body-parser")

const router = require("./router");

const connection = require("./database/connection");// connection database

//const { json } = require("body-parser");

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
//connection()
app.use(router);
  
app.listen(8080);


























