let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Order = require('../models/order');

module.exports.displayOrderData = (req,res,next)=>{
    Order.find((err, orderdata)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('order/list', {
                title:'Order', 
                Orderdata: orderdata
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=> {
    res.render('order/add',{
        title:'Add Order'
    })
}

module.exports.processAddPage = (req,res,next)=> {
    let newOrder = Order ({
        "name":req.body.name, 
        "order number":req.body.orderNumber,
        "phone":req.body.phone,
        "order data":req.body.orderDate,
        "status":req.body.status,
        "order info":req.body.orderInfo,
        "order collection":req.body.orderCollection
    });
    Order.create(newOrder,(err,Order) =>{
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/order-data');
        }
    });    
}

module.exports.displayEditPage = (req,res,next)=> {
    let id = req.params.id;
    Order.findById(id,(err,orderToEdit) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('order/edit',{title:'Edit Order', order: orderToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=> {
    let id = req.params.id;
    let updateOrder = Order({
        "_id":id,
        "name":req.body.name, 
        "order number":req.body.orderNumber,
        "phone":req.body.phone,
        "order data":req.body.orderDate,
        "status":req.body.status,
        "order info":req.body.orderInfo,
        "order collection":req.body.orderCollection
    });
    Order.updateOne({_id:id},updateOrder,(err) =>{
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/order-data');
        }
    });    
}

module.exports.displayDeletePage = (req,res,next)=> {
    let id = req.params.id;
    Order.deleteOne({_id:id},(err)=>{
        if(err)       
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/order-data');
        }
    });
}