/* Web Application Development using Javascript and AngularJS */
/* Exercise 2 - Object manipulation */
/* Author: Pedro Vitti */

var toString = function () {
    var propt;
    for (propt in this) {
        if (this.hasOwnProperty(propt)) {
            console.log(propt + ': ' + this[propt]);
        }
    }
};

var product = {
    code: 0,
    description: "Red Bicycle",
    inStock: false,
    details: {},
    toString: toString
};

console.log("Description: ", product.description);
product.description = "Red/Black Bicycle";
console.log("Description updated.");

product.inStock = undefined;

product.details.size = "20x40";
product.details.weight = "10kg";
console.log("\nProduct size and weight added.");

console.log("In Stock: ", product.inStock + "\n");

console.log("--- Product ---");
console.log(product.toString());
