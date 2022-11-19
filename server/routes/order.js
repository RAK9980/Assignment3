let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const order = require('../models/order');

//connect with bookModel
let Order = require('../models/order');
let orderController = require('../controller/order');

/*Read Operation */
//Get route for the book list
router.get('/',orderController.displayOrderData);

//add operation
//Get route for displaying the Add-page -- create operation
router.get('/add',orderController.displayAddPage);
//Post route for processing the Add-page -- create operation
router.post('/add',orderController.processAddPage);

//edit operation
//Get route for displaying the edit-operation -- update operation
router.get('/edit/:id',orderController.displayEditPage);
//Post route for displaying the edit-operation -- update operation
router.post('/edit/:id',orderController.processEditPage);

//delete operation
//get to perform delete-operation -- deletion
router.get('/delete/:id',orderController.displayDeletePage);

module.exports=router;