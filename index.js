const express = require('express')
const app = express()

const employeesRoutes = require('./routes/employees');

//const sqlcon = require('./mysql/connection');

app.use(employeesRoutes);

//app.use(sqlcon);

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.send('Welcome to our API!')
  })

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});


  