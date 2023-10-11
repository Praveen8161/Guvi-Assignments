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
        attaching a seat of ${this.seat1}
        and the variant is ${this.variant}
        `);
    }
}

ManfuctureCar.prototype.getName = function(){
  console.log(this.name);
}


//Passat is a instance of ManufactureCar
const passat = new ManfuctureCar("passat","4 seat leather",2,"petrol");


// ManfuctureCar.color = "red"; // it will add color property directly to ManufactureCar object but not to the instance(passat)
// console.log(new ManfuctureCar()); // will not show color property
// console.log(passat.color); //undefined

//So add using below method

ManfuctureCar.prototype.color = "red";
console.log(new ManfuctureCar()); // we can't see the color property
console.log(passat.color); //but the we can access it using instance 
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

// console.log(myMother.firstName); 
// myMother.firstName = "onnom";
// console.log(myMother.firstName); 
// myMother.nation = "india";
// console.log(myMother);
