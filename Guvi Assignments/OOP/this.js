const grandFather = {
    house :"grandfather house",
    getGrandFather: function(){
        console.log(this.house);
    },
    fatherObj: {
        house: "father house",
        getFatherHouse: function(){
            console.log(this.house); //called from methos sp represents the object
            // where the method is called in this case fatherObj
        },
    },

};
grandFather.getGrandFather();
grandFather.fatherObj.getFatherHouse();
