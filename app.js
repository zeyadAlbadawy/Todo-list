const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const port = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
let listItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];


app.get("/", function(req, res) {

  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newItem: listItems
  });
});

app.post("/", function(req, res) {
  let item = req.body.newListItem;
  if (req.body.button === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    listItems.push(item);
    res.redirect("/");
  }



});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newItem: workItems
  });
});





app.listen(3000, function() {
  console.log("port 3000 is working now");
})
