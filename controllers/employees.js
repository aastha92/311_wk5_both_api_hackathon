const pool = require('./sql/connection');

const getEmployees = (req,res) =>{
    let sql = 'SELECT * FROM ?? LIMIT ?';
    let replacement = ["employees", "50"];
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occured')
        }
        res.json(rows)
      });
}

const getEmployeesById = (req,res) =>{
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let replacement = ["employees", "emp_no", "req.id.params"];
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occured')
        }
        res.json(rows)
      });
}


const getEmployeesByFirstName = (req,res) => {}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }

