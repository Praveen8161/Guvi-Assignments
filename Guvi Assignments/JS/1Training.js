let arr1 = "1 9 16 25 46".split(" ");
let arr2 = "2 3 4 5 6".split(" ");
let arr3 = [...arr1,...arr2].sort((a,b) => a-b);
console.log(arr3);
let result = arr3[arr3.length/2] + arr3[(arr3.length/2)-1];
console.log(arr3.length/2);