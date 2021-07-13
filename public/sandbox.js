"use strict";
var isLoggedIn;
var strOrNumber;
var strArr;
var mixedArr = [];
var anyData;
var anyDataArr = [];
var obj;
var greet;
greet = function () { return console.log('Hello'); };
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
var dataObj = function (val) { return console.log(val); };
add(1, 2);
dataObj([{
        name: 'Reis',
        age: 10
    }]);
var logDetails = function (uuid, item) { return console.log(uuid, item); };
var dataUser = function (user) { return console.log(user); };
logDetails('123', 10);
dataUser({
    name: 'Reis',
    uuid: 10
});
// Function Signatures
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
