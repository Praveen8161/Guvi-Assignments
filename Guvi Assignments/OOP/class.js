//Class Declaration
class CarProduction {
    #price = "2500000"; // private property - can't be changed and have to be declared in class scope
    constructor(name,color,fuelVariant,engineCapacity){
        this.name = name;
        this.color = color;
        this.fuelVariant = fuelVariant;
        this.engineCapacity = engineCapacity;
    } 
    // businnes logic or methods
    getDetai1s() {
        console. log(`
            Name : ${this.name}
            Color:${this.color}
            Fuel-Type:${this.fuelVariant}
            Engine-Capacity:${this.engineCapacity} liter
            price ${this.#price}`);
    }
}
const car1 = new CarProduction("polo","red","diesel",1.5);

// console.log(car1);
car1.name = "toyato";
//car1.#price = 5000000; // can't be changed 
// car1.getDetai1s();

class Features extends CarProduction{
    constructor(name,color,fuelVariant,engineCapacity,safety,model,carType,type){
        super(name,color,fuelVariant,engineCapacity); //(super constructor)it will
                                             //replace the values in CarProduction Constructor
        this._safety = safety;
        this.model = model;
        this.carType = carType;
        this.type = type;
    }
    //getter method
    get safety(){
        return this._safety;
    }
    //setter method
    set safety(newStarRating){
        if (newStarRating < 0){
            console. log("Error : star rating cannot be less than 0");
        }else if(newStarRating > 5){
            console. log("Error : star rating cannot be more than 5");
        }else {
            this._safety = newStarRating;
        }
    }
    getFeatures(){
        console.log(`
        StarRating:${this._safety}  
        Model Name:${this.model}
        Car Type:${this.carType} Car
        Seat type:${this.type} Seat      
        `)
    }
}
const car2 = new Features("tiguan","grey","petrol",4,5,"TopLine","SUV","Leather");

// console.log(car2);
// car2.getDetai1s();
// car2.getFeatures();

console.log(car2.safety); //using the getter method 
car2.safety = 3; //using a setter method

class CarOthers extends Features{
    constructor(name,color,fuelVariant,engineCapacity,safety,model,carType,type,tyre,availability){
        super(name,color,fuelVariant,engineCapacity,safety,model,carType,type);
        this._tyre = tyre;
        this._availability = availability;
    }
    get tyre(){
        return this._tyre;
    }
    get availability(){
        return this._availability;
    }
    fullDetails(){
        console.log(`
        tyre ${this.tyre}
        availability ${this.availability}
        `)
    }
}
const car5 = new CarOthers("mahindrea","Royal Blue","gas","220cc",4,
                        "swagan","dabba","family Pack","bubble","in Stock");

// console.log(car5);
// car5.fullDetails();
// car5.getDetai1s();
// car5.getFeatures();



    