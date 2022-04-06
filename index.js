var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.listen(4000, function() {
  console.log("Server is running on port 4000");
});



