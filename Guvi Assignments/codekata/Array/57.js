// function alternateArray(arr) {
//     arr.sort((a, b) => a - b);
//     let result = [];
//     let i = 0, j = arr.length - 1;

//     while (i <= j) {
//         if ((j + i) % 2 === 0) {
//             result.push(arr[j]);
//             j--;
//         } else {
//             result.push(arr[i]);
//             i++;
//         }
//     }
//     return result;
// }

// let n = 11;
// let arr = "10 20 30 40 50 60 70 80 90 100 110".split(' ').map(Number);
// console.log(alternateArray(arr).join(" "));


let a = "10 20 30 40 50 60 70 80 90 100 110".split(" ").sort((a,b) => b-a);
let len = a.length;
let result = [];
for(var i=0; i<Math.ceil(len/2); i++){
    result.push(a.shift());
    a.length > 1 ? result.push(a.pop()): "";
}
console.log(result.join(" "));

