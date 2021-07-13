// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// Submit Form
form.addEventListener('submit', (e: Event) => {
   e.preventDefault();

   console.log(
      type.value,
      tofrom.value,
      details.value,
      amount.valueAsNumber,
   )
});


// Classes
class Invoice {
   client: string;
   details: string;
   amount: number;

   constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
   }

   format() {
      return {
         client: this.client,
         details: this.details,
         amount: this.amount,
      }
   }
}

const invOne = new Invoice('Reis', 'payment', 100);

console.log(invOne.format())