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

app.get("/events/:id", (req,res) => {
    const id = Number(req.params.id);

    const event = events.find((obj) => obj.id === id);
    if (event){ 
        res.json(event);
    }
    else if (!Number.isInteger(id)){
        res.status(400).json({ error: "Bad request, wrong event id type bro, has to be an integer"})
    }
    else {
        res.status(404).json({ error: "event not found bro"})
    }
});

const port = 3000;
app.listen(port, () => {
    console.log("listening on",port);
});