const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, express, and Postgers API'})
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

app.get('/shots', db.getShots);