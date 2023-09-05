let arr = "1 2 3 4 6 0 0".split(" ");
function add(arr1){
    let sum = 0;
    for (var i=0; i<arr1.length;i++){
        sum += parseInt(arr1[i]);
    }
    return sum;
}
let sum1 = add(arr.slice(0,3));
let sum2 = add(arr.slice(arr.length-3,arr.length));
if(sum1 === sum2){
    console.log(1);
}else{
    console.log(0);
}
