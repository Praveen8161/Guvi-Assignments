//Class declaration and encapulation
class CarProduction {
    constructor(name,color,fuelVariant,engineCapacity){
        this.name = name;
        this.color = color || "Yellow";
        this.fuelVariant = fuelVariant;
        this.engineCapacity = engineCapacity;
    } 
    // businnes logic or methods
    getDetai1s() {
        console.log(`
            Name : ${this.name}
            Color:${this.color}
            Fuel-Type:${this.fuelVariant}
            Engine-Capacity:${this.engineCapacity} liter`);
    }
    //Polymorpisam
    getSpecialData(){
        console.log(`The speciality of the vehicle is ${this.fuelVariant} `);
    }
}
const car1 = new CarProduction("polo","Red","diesel",1.5);
console.log(car1);
car1.getDetai1s();
car1.getSpecialData();

//---------------------------------------------------------------------------------------------------
//Inheritance -- Feature inheret CarProduction methods and properties
class Features extends CarProduction{
    constructor(name,color,fuelVariant,engineCapacity,safety,model,carType,type){
        super(name,color,fuelVariant,engineCapacity); //(super constructor)it will
                                             //replace the values in CarProduction Constructor
        this._safety = safety; //for getters
        this.model = model;
        this.carType = carType;
        this.type = type;
    }
    //getter method
    get safety(){
        return this._safety;
    }
    //setter methods
    set safety(newRating){
        if (newRating < 0){
            console. log("Error : star rating cannot be less than 0");
        }else if(newRating > 5){
            console. log("Error : star rating cannot be more than 5");
        }else {
            this._safety = newRating;
        }
    }
    getFeatures(){
        let bhp = (this.engineCapacity * 100) /2.6;  //abstraction so nobady can change the value outside
        console.log(`
        StarRating:${this.safety}  
        Model Name:${this.model}
        Car Type:${this.carType} Car
        Seat type:${this.type} Seat
        color:${this.color}
        BHP : ${bhp}
        `)
    }
    //Polymorpisam
    getSpecialData(){
        console.log(`The speciality of the vehicle is ${this.safety} `);
    }
}
const car2 = new Features("tiguan","grey","petrol",9.4,5,"TopLine","SUV","Leather");

console.log(car2);
car2.getDetai1s();
car2.getFeatures();
 
console.log(car2.safety); // using getter methods

//setter methods
car2.safety = 6;
car2.safety = -5;
car2.safety = 3;
console.log(car2.safety);

car2.getSpecialData();//Polymorphisam

console.log(car2.bhp)