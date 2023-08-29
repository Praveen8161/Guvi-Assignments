// var can be reassigned and redeclared
// let can only be resiigned 
// const cannot be reassigned and redeclared
let fruits = ["apple","mango","starwberry","lolipop","Banana", "Orange"]; //Array
console.log(fruits);

fruits.pop();  //remove last value
console.log("pop =" + fruits);

fruits.push("extra");//add extra value at last
console.log("push =" +fruits);

fruits.shift(); //remove first element
console.log("shift =" +fruits);

fruits.unshift("ele fir"); //replace first element
console.log("unshift =" +fruits);

fruits[3] = "replaced"
console.log("added a value =" +fruits);

fruits.splice(1,1); // array.splice(index, howmany, item1, ....., itemX)
console.log("splice =" +fruits);

fruits.splice(0,0,"splice0","splice1");
console.log(fruits);
