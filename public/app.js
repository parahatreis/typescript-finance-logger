"use strict";
// Form
var form = document.querySelector('.new-item-form');
// Inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// Submit Form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return {
            client: this.client,
            details: this.details,
            amount: this.amount,
        };
    };
    return Invoice;
}());
var invOne = new Invoice('Reis', 'payment', 100);
console.log(invOne.format());
