const pool = require('../mysql/connection');
const mysql = require('mysql')

const getEmployees = (req,res) =>{
    let sql = 'SELECT * FROM ?? LIMIT ?';
    let replacements = ["employees", "50"];
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


const getEmployeesByFirstName = (req,res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let replacement = ["employees", "first_name", "req.first_name.params"];
    sql = mysql.format(sql, replacements)

    pool.query(sql, (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occured')
        }
        res.json(rows)
      });
}

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }

