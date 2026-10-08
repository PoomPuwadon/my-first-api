const events = [
    {id: 1, name: "Event 1", seats: 5},
    {id: 2, name: "Event 2", seats: 3},
    {id: 3, name: "Event 3", seats: 4}
];

const express = require("express");
const app = express();

app.get("/hello", (req,res) => {
    res.send("Hi, I read you");
});

app.get("/events", (req,res) => {
    res.json(events); // for .send Express checks if it's a string or array/object, for strings it sends HTML, for array/object it sends json
});

const port = 3000;
app.listen(port, () => {
    console.log("listening on",port);
});