let isLoggedIn: boolean;
let strOrNumber: string | number;
let strArr: string[];
let mixedArr: (string | number | boolean)[] = [];
let anyData: any;
let anyDataArr: any[] = [];
let obj: object;

let greet: Function;

greet = () => console.log('Hello')

const add = (a: number, b: number, c: string | number = 10) => {
   console.log(a + b);
   console.log(c)
};
const dataObj = (val: object[]) => console.log(val);

add(1, 2);
dataObj([{
   name: 'Reis',
   age : 10
}])

// Aliases
type StringOrNumber = string | number;

const logDetails = (uuid: StringOrNumber, item: number) => console.log(uuid, item);

const dataUser = (user: { name: string, uuid: StringOrNumber }) => console.log(user);

logDetails('123', 10);
dataUser({
   name: 'Reis',
   uuid : 10
})


// Function Signatures
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
   if (action === 'add') {
      return numOne + numTwo;
   }
   else{
      return numOne - numTwo;
   }
}