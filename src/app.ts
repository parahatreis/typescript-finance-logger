import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

// Submit Form
form.addEventListener('submit', (e: Event) => {
   e.preventDefault();

   let doc: HasFormatter;

   if (type.value === 'invoice') {
      doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
   }
   else {
      doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
   }

   list.render(doc, type.value, 'end')
});


// GENERICS
const addUID = <T extends {name: string}>(obj: T) => {
   let uid = Math.floor(Math.random() * 100);
   return { ...obj, uid }
}

let docOne = addUID({ name: 'reis1', age: 40 });
let docTwo = addUID({ name: 'reis2', age: 30 });

console.log(docOne);
console.log(docTwo);

// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

// with Interface
interface Resource<T> {
   uid: number;
   resourceName: ResourceType,
   data: T;
}

const data1: Resource<object> = {
   uid: 1,
   resourceName: ResourceType.BOOK,
   data: {
      name:'Kick',
   }
}
const data2: Resource<object> = {
   uid: 2,
   resourceName: ResourceType.DIRECTOR,
   data: {
      name:'Rash',
   }
}

console.log(data1, data2)