require("dotenv").config();
const express = require("express");
const router = require("./routes/ai.routes")
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/ai", router)

app.get("/", (req, res) => {
    res.send('/GET Route')
})

module.exports = app