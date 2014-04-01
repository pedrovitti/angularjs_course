/* Web Application Development using Javascript and AngularJS */
/* https://github.com/pedrovitti/angularjs_course */
/* Exercise 6 - Inheritance */
/* Author: Pedro Vitti */

var toString = function () {
    var propt;
    for (propt in this) {
        if (this.hasOwnProperty(propt)) {
            console.log(propt + ': ' + this[propt]);
        }
    }
};

var includeKeyword = function (word) {
    this.keyword.push(word);
};

var product = {
    code : 0,
    description : "Red Bicycle",
    inStock : false,
    details : { weight: "10kg",
                 size: "1mx2m"
               },
    toString: toString,
    keyword : ['nice', 'beautiful', 'funny'],
    includeKeyword : includeKeyword,
    price : 120,
    getPrice : function (a) { return this.price }
};

console.log("Price without discount: ", product.getPrice());

var productWithDiscount = Object.create(product);
productWithDiscount.discount = 0.2;
productWithDiscount.getPrice = function () {
    return product.getPrice.call(this) * (1-productWithDiscount.discount);
};

console.log("Price with discount: ", productWithDiscount.getPrice());