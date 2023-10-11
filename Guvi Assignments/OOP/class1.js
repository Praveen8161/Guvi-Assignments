class BackingCake{
    #extras = "Plastic knife";
    constructor (cakeName,flavor,price,ingrident){
        this.name = cakeName;
        this.flavor = flavor;
        this.price = price;
        this.ingrident = ingrident;
    }

    getDetails(){
        let gstPrice = this.price*1.2;
        console.log(`
        cake name ${this.name}
        flovor ${this.flavor}
        price ${gstPrice}
        ingridents used ${this.ingrident}
        extra available ${this.#extras}
        `);
    }

    getHighlight(){
        console.log(`
        The highlight of this cake is ${this.ingrident}
        `);
    }
}

const blackForest = new BackingCake("black forest","strawberrey",250,"milk and egg");

class CakeFeatures extends BackingCake{
    constructor(cakeName,flavor,price,ingrident,color,texture,compliment,rating){
        super(cakeName,flavor,price,ingrident);
        this.color = color;
        this.texture = texture;
        this.compliment = compliment;
        this.rating = rating;
    }

    get cakeColor(){
        return this.color;
    }

    get cakeRating(){
        return this.rating;
    }

    set cakeRating(newRating){
        if(newRating<0 || newRating >5){
            console.log("rating has to 0 to 5");
        }else{
            this.rating = newRating;
        }
    }

    getFeatures(){
        console.log(`
        color ${this.color}
        texture ${this.texture}
        compliment ${this.compliment}
        rating ${this.rating}
        `);
    }
}


const whiteForest = new CakeFeatures("white Forest","chocolate",230,"butter","white","plain","candle",5);

// console.log(blackForest);
// console.log(whiteForest);

// blackForest.getDetails();
// whiteForest.getDetails();
// whiteForest.getFeatures();

console.log(whiteForest.cakeColor);

whiteForest.cakeRating = 4;
console.log(whiteForest.rating);

blackForest.getHighlight();
whiteForest.getHighlight();

