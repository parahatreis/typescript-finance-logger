"use strict";
let isLoggedIn;
let strOrNumber;
let strArr;
let mixedArr = [];
let anyData;
let anyDataArr = [];
let obj;
let greet;
greet = () => console.log('Hello');
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
const dataObj = (val) => console.log(val);
add(1, 2);
dataObj([{
        name: 'Reis',
        age: 10
    }]);
const logDetails = (uuid, item) => console.log(uuid, item);
const dataUser = (user) => console.log(user);
logDetails('123', 10);
dataUser({
    name: 'Reis',
    uuid: 10
});
// Function Signatures
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
