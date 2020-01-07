const express = require('express');
const router = express.Router();

employeesController = require('../controllers/employees');

router.get ('/employees' , employeesController.getEmployees); 

router.get ('/employees/:id', (req, res) => {
    res.send ("getting employees...")
}) 
    
router.get ('/firstname/:first_name', (req, res) => {
    res.send ("getting employees...")
}) 

module.exports = router;