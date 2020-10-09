const express = require("express");
const router = express.Router();

router.get("/", function (req, res){
    res.render("index", );
});

router.get("/contact-us", function (req, res){
    res.render("contact-us", );
});

router.get("/cart", function (req, res){
    res.render("cart", );
});

router.get("/checkout", function (req, res){
    res.render("checkout", );
});

router.get("/error", function (req, res){
    res.render("error", );
});

router.get("/gallery", function (req, res){
    res.render("gallery", );
});

router.get("/my-account", function (req, res){
    res.render("my-account", );
});

router.get("/shop-detail", function (req, res){
    res.render("shop-detail", );
});

router.get("/shop", function (req, res){
    res.render("shop", );
});

router.get("/wishlist", function (req, res){
    res.render("wishlist", );
});

router.get("/signin", function (req, res){
    res.render("signin", );
})

router.post("/signin", function (req, res){
    console.log(req.body);
    res.render("signin", );
})

router.get("/register", function (req, res){
    res.render("register", );
})



module.exports = router;