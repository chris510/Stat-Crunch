const Pool = require('pg').Pool

const pool = new Pool({
  user: 'chris',
  host: 'localhost',
  database: 'nba-shots-db_development',
  password: 'password',
  port: 5432,
})

const getShots = (request, response) => {
  pool.query('SELECT * FROM shots', (error, results) => {
      if (error) {
        throw error;
      } else {
        response.status(200).json(results.rows)
      }
  })
};

  
module.exports = getShots;