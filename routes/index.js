var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/star_organic');

/* GET home page. */
router.get('/', function(req, res, next) {
    var successMsg = req.flash('success')[0];
    var products = Product.find(function(err, docs) {
        res.render('shop/index', {title: 'Star Organic farm',  products: docs, successMsg: successMsg, noMessages: !successMsg});
    });

});
router.get('/cart/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});
router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});

router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});
router.get('/cart', function(req, res, next) {
    if (!req.session.cart) {
        return res.render('shop/cart', { products: null });
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.get('/checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/cart');
    }
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    res.render('shop/checkout', { total: cart.totalPrice });
});
router.post('/checkout', function(req, res, next) {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var order = new Order({
        user: req.user,
        cart: cart,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        name:req.body.name,
        date: Date()
    });
    order.save(function(err,result){
        if(err){
            return res.render('shop/checkout');
        }
        req.flash('success', 'Successfully order product!');
            req.session.cart = null;
            res.redirect('/');
    });
});
module.exports = router;