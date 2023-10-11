//filter

let arr = [1,2,3,4,5,6,7,8,9,10];

let res = arr.filter((val)=>{
    return val%2 === 0;
});

// console.log(res);

//--------------------------------------------
//filter Polyfill

Array.prototype.myFilter = function(exp){
    let filArr = [];
    for(var i=0; i<this.length; i++){
        let filVal = exp(this[i],i,this);
        if(filVal === true){
            filArr.push(this[i]);
        }
    } 

    return filArr;
}

let myFilArr = arr.myFilter((val) => {
    return val%2 === 0;
});

// console.log(myFilArr);

//=--------------------------------------------------------
//map
let mapArr = [1,2,3,4,5,6,7,8,9,10];

let mapRes = mapArr.map((val)=>{
    return val+1;
});

// console.log(mapRes);

Array.prototype.myMap = function(exp){
    let myMapArr = [];
    for(var i=0; i<this.length; i++){
        myMapArr.push(exp(this[i],i,this));
    }
    return myMapArr;
}

let myMapRes = mapArr.myMap((val)=>{
    return val+1;
});

// console.log(myMapRes);

//----------------------------------------------
let redArr = [2,4,6,8,10]; //30

let redRes = redArr.reduce((acc,val) => {
    return acc += val;
},10);

// console.log(redRes);

Array.prototype.myReduce = function(exp,initialVal){
    let total = initialVal || null;

    for(var i=0; i<this.length; i++){
       total = exp(total,this[i],i,this);
    }

    return total;
}

let myRedRes = redArr.myReduce((acc,val) => {

    return acc += val;
});

// console.log(myRedRes);
console.log("---------------------------------------------------");

Array.prototype.MyreduceRight = function(exp,initialVal){
    let total = initialVal || null;

    for(var i=this.length-1; i>=0; i--){
        total = exp(total,this[i],i,this);
    }

    return total;
}

let myRedRightRes = redArr.MyreduceRight((acc,val) => {

    return acc += val;
});

// console.log(myRedRightRes);

let a = new Promise((resolve,reject) =>{
    reject("ERR");
});

a.then((val) => console.log(val))
.catch((err) => console.log(err));

