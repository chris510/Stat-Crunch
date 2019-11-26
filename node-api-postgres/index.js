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

// app
// .route('/shots')
// .get(db.getShots)

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'chris',
  host: 'localhost',
  database: 'nba-shots-db_development',
  password: 'password',
  port: 5432,
})

const getShots = (request, response) => {
  pool.query("SELECT * FROM Shots WHERE season='2016-17' ", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

app.get('/shots', getShots)