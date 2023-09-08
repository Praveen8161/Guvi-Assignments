const grandFather = {
    house :"grandfather house",
    getGrandFather: function(){
        console.log(this.house);
    },
    fatherObj: {
        house: "father house",
        getFatherHouse: function(){
            console.log(this.house);
        },
    },

};
grandFather.getGrandFather();
grandFather.fatherObj.getFatherHouse();
