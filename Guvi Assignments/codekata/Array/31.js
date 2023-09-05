let a = [ '3', '2', '98 12', '6', '1 2 3 8 5 9', '1', '11' ];
let result = [];
for (var i=2;i<a.length;i+=2){
    result.push(...(a[i].split(" ").sort((a,b)=>a-b)));
}
console.log(result.join(" "));