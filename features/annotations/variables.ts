const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null=null;
let nothing: undefined=undefined;

// built in objects
let now: Date=new Date();

// Array
// type array that contains strings
let colors: string[] = ['red','green','blue'];

let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,false,true];

// classes
class Car {

}

let car: Car = new Car();

// object literal
let point: {x:number; y:number} = {
  x:10,
  y:20
}

// functions
const logNumber: (i: number) => void = (i:number) => {
  console.log(i);
}

// when to use annotations
// 1) Function that returns any type
const json = '{"x": 10, "y":20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) Declare variable on one line and initialize it on another
let words = ['one','two','three'];
let foundWord: boolean;

for (let i=0; i< words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}

// 3) when type can't be inferred
let numbers = [-10,-1,12];
let numsAboveZero: boolean | number = false;


