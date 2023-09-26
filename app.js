import express from "express"

// const express = require("express");

const app = express();

const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})

// app.get(route, callbackFunction)

app.get("/", (req, res) => {
    res.send("Hello musaib")
})


// HTTP Methods.
// GET
// Post
// PUT
// Delete.


// Get it may retrive the data from the server.
// Post - it accepts the data which is enclosed in the request as an object.
// PUT - it modifidy the data on the server and if the data is not exsisted it creates the data.
// Delete- Target resoucre (data) is deleted.


// 

