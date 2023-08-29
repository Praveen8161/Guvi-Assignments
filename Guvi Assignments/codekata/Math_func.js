// most of the Math method return value as a number
let val = Math.round(45.5); //Math.round(45.4) will return -> 46
let c = Math.trunc(8.99999); // remove the decimal doesnot round off the number
let frou = Math.fround(2.60); // The nearest 32-bit single precision float representation of the number.
let num = [25,23,52,457,569,452,478]
let les = Math.min(...num); //Spread operaters is a 3 dots
let hig = Math.max(...num);
let aqr = Math.sqrt(3);
let poe = Math.pow(3,2);
let absolute = Math.abs(-8);
let a = Math.ceil(52.25);
let b = Math.floor(52.25);
let x = Math.sin(50);
let y = Math.cos(50);
let ran = Math.random(); //random num bw 0 to 1
let ran1 = Math.random() *100; //random num bw 0 to 100
// to get a random whole number 
let whRan = Math.floor((Math.random()*100)+1); // from 1 to 100
let exp = Math.ceil((Math.random()*100)+1);
// upto 2 decimal points -> exp.toFixed(2);

//array has reverse() and sort((a,b)=> a-b)


console.log(val);
console.log(c);
console.log(les);
console.log(frou);
console.log(hig);
console.log(aqr);
console.log(poe);
console.log(absolute);
console.log("..............................");
console.log(a);
console.log(b);
console.log("..............................");
console.log(x);
console.log(y);
console.log("..............................");
console.log(ran);
console.log(ran1);
console.log("..............................");
console.log(whRan);
console.log(exp);