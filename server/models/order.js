let mongoose = require('mongoose');

//create a book model
let customerOrder = mongoose.Schema({
    name: String,
    orderNumber: String,
    phone: Number,
    orderDate: String,
    status: String,
    orderInfo: String,
    orderCollection: String
    },
    {
        collection: "orders"
    }
);
module.exports = mongoose.model('Order', customerOrder);