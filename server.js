const express = require("express");

const app = express();

const body_parser = require("body-parser")

const router = require("./router");

const connection = require("./database/connection");// connection database

const usercontroller = require("./controllers/userController");
const { json } = require("body-parser");

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

app.use(router);
  
app.listen(8080);

































// //defining path for views 
// app.set("views",path.join(__dirname,"./views/"));
// app.engine("hbs",exphbr({
//   extenme:"hbs", 
//   defaultLayout:"mainlayout",
//   layoutdir : __dirname+"/views/mainlayout"
// }));
// app.set("views","hbs");

