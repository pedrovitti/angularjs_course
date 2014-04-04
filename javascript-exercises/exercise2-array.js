/* Web Application Development using Javascript and AngularJS */
/* https://github.com/pedrovitti/angularjs_course */
/* Exercise 2 - Array manipulation */
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
    includeKeyword : includeKeyword
};

console.log("In Stock: ", product.inStock);

console.log("Keyword array length: ", product.keyword.length);

console.log("Adding keyword 'show':", product.includeKeyword("show"));
console.log("Keywords:", product.keyword);
console.log("First keyword: ", product.keyword[0]);
console.log("Second keyword: ", product.keyword[1]);
console.log("Removing second keyword: ", product.keyword.splice(1, 1));
console.log("Second word: ", product.keyword[1]);
console.log("Keywords:", product.keyword);
console.log("--- Product ---");
console.log(product.toString());