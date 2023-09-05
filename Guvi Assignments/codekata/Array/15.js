let arr = "1 1 3 2 4 4 4 5 6 8 9 5 7 6 6 8".split(" ").sort((a,b) => a-b);
function OrderSort(arr){
    let result = [];
    let arr1 = [];
    for (var i = 0; i<arr.length; i++){
        if (arr[i] === arr[i+1]){
            arr1.push(arr[i]);
        }else if (i === 0 || (arr[i] !== arr[i-1] && arr[i] !== arr[i+1])){
            result.push(arr[i]);
        }
    }
    if(arr1.length===0){
        return result;
    }else{
        return result.concat(OrderSort(arr1));
    }
}
let finalResult = OrderSort(arr);
console.log(finalResult.join(" "));
