/* Web Application Development using Javascript and AngularJS */
/* https://github.com/pedrovitti/angularjs_course */
/* Exercise 4 - Try Catch */
/* Author: Pedro Vitti */
var IllegalArgumentError = function() {
    return {
        name: "IllegalArgumentError",
        msg: "Illegal Argument!"
    };
}

var WrongPatternError = function() {
    return {
        name: "IllegalArgumentError",
        msg: "Wrong pattern!"
    };
}

var GenericError = function(mensagem) {
    return {
        name: "GenericError",
        msg: mensagem
    };
}
var toString = function () {
    var propt;
    for (propt in this) {
        if (this.hasOwnProperty(propt)) {
            console.log(propt + ': ' + this[propt]);
        }
    }
};

var listKeywords = function () {
    var i;
    for (i = 0; i < this.keywords.length; i += 1) {
        console.log(this.keywords[i]);
    }
};

//All keywords must start with '#'
var includeKeyword = function (word) {
    if (word === "") {
        throw IllegalArgumentError();
    }
    
    var pattern = /#\w*\d*/;
    if (!pattern.test(word)) {
        throw WrongPatternError();
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

try { 
    product.includeKeyword("wrongWord");
} catch (err) {
    console.log(err.name +": " + err.msg);
}

try { 
    product.includeKeyword("");
} catch (err) {
    console.log(err.name +": " + err.msg);
}
