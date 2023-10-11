
function ManufactureCar(carName,model,year,fuelVarient){
    this.name = carName;
    this.model = model;
    this.year = year;
    this.fuelVarient = fuelVarient;
    this.startCarManufacture = function(){
        console.log(`
        starting manufacturing for car ${this.name}
        the car model is ${this.model}
        year of manufacturing ${this.year}
        fuel used by the car ${this.fuelVarient}
        `);
    }
}

let nissan = new ManufactureCar("nissan","s51IG",2023,"petrol");

ManufactureCar.prototype.getName = function(){
    console.log(`Name of the car is ${this.name}`);
}

console.log(new ManufactureCar());

ManfuctureCar.color = "red";
console.log(new ManfuctureCar()); 
console.log(nissan.color); 

// console.log(nissan);

// nissan.getFuelVarient = function(){
//     console.log(this.fuelVarient);
// }
// nissan.getName();
// nissan.getFuelVarient();
// console.log(nissan);

// nissan.startCarManufacture();