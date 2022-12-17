const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    res.send("thanks for submitting");
});

app.listen(3000, function() {
    console.log("the server is running on port 3000");
});