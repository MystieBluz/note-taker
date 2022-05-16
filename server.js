const express = require('express');
const path = require("path");
const api = require("./develop/public/assests/js/index.js")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api", api);

app.use(express.static("public"));

app.get("/", (req,res) =>
    res.sendFile(path.join(dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
    res.sendFile(path.join(dirname, "public/index.html"))
);

app.get("*", (req, res) =>
    res.sendFile(path.join(_dirname, "public/index.html"))
);

app.lsiten(PORT, () =>
console.log('App is listening to PORT 3001'));