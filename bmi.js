const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res) {
    var weight = req.body.weight;
    var height = req.body.height;
    var bmi = weight/Math.pow(height, 2);

    res.send("bmi = " + bmi);
});


// listen
app.listen(3000, function() {
    console.log("this server is running on port 3000");
});