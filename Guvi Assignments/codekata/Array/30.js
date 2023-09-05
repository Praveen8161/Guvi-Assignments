let arr = "4 0 2 1 3".split(" ");
let result = [];
for (var i=0; i<arr.length; i++){
    result[i] = arr[arr[i]];
}
console.log(result.join(" "));