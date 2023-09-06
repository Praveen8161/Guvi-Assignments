let a = "1 5 4";
let b = a.trim().split(" ");
let temp = b.slice(0).sort((a,b) => b-a);
let result = [];
for (var i of temp){
    result.push(b.indexOf(i));
}
console.log(result.join(" "));