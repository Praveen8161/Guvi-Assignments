let array = [1,2,3,4,5,6,7,8,9,10];
let filteredArray = array.filter((value) => value != 2);
console.log(filteredArray);

console.log("===================================================");
Array.prototype.myFilter = function(eg){
    let newArr = [];
    for(var i=0; i<this.length; i++){
        let val = eg(this[i],i,this);
        if(val === true){
            newArr.push(this[i]);
        }
    }
    return newArr;
}
let myFilteredArray = array.myFilter((value) => value != 2);
console.log(myFilteredArray);