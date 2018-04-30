var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/star_organic');

/*
new Product({
        imgPath: '/images/',
        title: '',
        category: '',
        description: '',
        price: ,
        unit: ''
    }),
*/

var products = [
    new Product({
        imgPath: '/images/definition_lgegreenlentils.png',
        title: 'Large green lentils',
        category: 'pulses',
        description: 'A commonly grown green-colored lentil and one of the larger-sized lentils. Typically used in soups or ground into flour.',
        price: 0.48,
        unit: 'pound'
    }),
    new Product({
        imgPath: '/images/definition_redlentils.png',
        title: 'Split red lentils',
        category: 'pulses',
        description: 'Offered say visited elderly and. Waited period are played family man formed. He ye body or made on pain part meet. You one delay nor begin our folly abode.',
        price: 0.42,
        unit: 'pound'
    }),
    new Product({
        imgPath: '/images/lot-106205.jpg',
        title: 'Organic Traditional Dehraduni Basmati Rice',
        category: 'rice',
        description: 'Dehraduni’s famed flavor, fragrance and elongation are what elevated basmati rice to one of the world’s most recognized and best-loved rices. Dehraduni basmati is like champagne.',
        price: 7.99,
        unit: 'bag'
    })
];
var count = 0
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        count++;
        if (count == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}