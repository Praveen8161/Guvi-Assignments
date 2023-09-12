function ManfuctureCar(name,seat,engine,variant){
    this.name = name;
    this.seat1 = seat;
    this.engine = engine * 10;
    this.variant = variant;
    this.getCarDetails  = function () {
        console.log(`
        Starting manufacturing ${this.name}
        creating a engine of ${this.engine}
        ${engine}
        attaching a seat of ${this.seat}
        and the variant is ${this.variant}
        `);
    }
}
ManfuctureCar.prototype.getName = function(){
  console.log(this.name);
}

const passat = new ManfuctureCar("passat","4 seat leather",1,"petrol");
console.log(passat.seat1);
passat.getName()
console.log(passat.engine);
//=======================================================================================
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    };
  }
let myMother = new Person("Sally","Rally",48,"green");

//console.log(myMother.firstName); 
// myMother.firstName = "onnom";
// //console.log(myMother.firstName); 
// myMother.nation = "india";
// console.log(myMother);
// ManfuctureCar.color = "red";
// console.log(new ManfuctureCar()); 
// console.log(passat.color); 
