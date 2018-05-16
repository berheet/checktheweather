const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const basicController = require(`${__dirname}/Controller/Controllers`)


const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/api/add", (basicController.add));
app.delete("/api/delete", (basicController.del))
app.get("/api/getWeather", basicController.get)

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})