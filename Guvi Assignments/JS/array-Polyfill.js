//array map function recreate
let array = [1,2,3,4,5,6,7,8,9,10];
let mappedArray = array.map((value,index,array) => {
    console.log(`${value} and ${index} and ${array}`);
    return value*2});
console.log(mappedArray);

console.log("=================================================");
Array.prototype.zenMap = function(ex){
    let newArr = [];
    for(var i=0; i<this.length; i++){
        newArr.push(ex(this[i],i,this));
    }
    return newArr;
}
let zenMappedArray = array.zenMap((value,index,array) => {
    console.log(`${value} and ${index} and ${array}`);
    return value*2});
    console.log(zenMappedArray);