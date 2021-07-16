import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// Form
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// Submit Form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'reis1', age: 40 });
let docTwo = addUID({ name: 'reis2', age: 30 });
console.log(docOne);
console.log(docTwo);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const data1 = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {
        name: 'Kick',
    }
};
const data2 = {
    uid: 2,
    resourceName: ResourceType.DIRECTOR,
    data: {
        name: 'Rash',
    }
};
console.log(data1, data2);
// Tuples
let tupleArr = ['string', 2, false];
tupleArr[0] = '2';
console.log(tupleArr);
