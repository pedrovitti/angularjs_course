/* Web Application Development using Javascript and AngularJS */
/* https://github.com/pedrovitti/angularjs_course */
/* Exercise 3 - RegEx */
/* Author: Pedro Vitti */

var toString = function () {
    var propt;
    for (propt in this) {
        if (this.hasOwnProperty(propt)) {
            console.log(propt + ': ' + this[propt]);
        }
    }
};

var listKeywords = function () {
    var i = 0;
    for (i = 0; i < this.keywords.length; i += 1) {
        console.log(this.keywords[i]);
    }
};

//All keywords must start with '#'
var includeKeyword = function (word) {
    var pattern = /#\w*\d*/;
    if (!pattern.test(word)) {
        console.log("Error: Wrong pattern!");
        return;
    }
    this.keywords.push(word);
};

var product = {
    code : 0,
    description : "Red Bicycle",
    inStock : false,
    details : { weight: "10kg",
                 size: "1mx2m"
               },
    toString: toString,
    keywords : ['nice', 'beautiful', 'funny'],
    includeKeyword : includeKeyword,
    listKeywords : listKeywords
};

console.log("In Stock: ", product.inStock);

console.log("Keyword array length: ", product.keywords.length);

console.log("Adding keyword 'show':", product.includeKeyword("show"));
console.log("Keywords:", product.keywords);
console.log("First keyword: ", product.keywords[0]);
console.log("Second keyword: ", product.keywords[1]);
console.log("Removing second keyword: ", product.keywords.splice(1, 1));
console.log("Second word: ", product.keywords[1]);
console.log("Keywords:", product.keywords);
console.log("--- Product ---");
console.log(product.toString());
console.log("List keywords: ", product.listKeywords());