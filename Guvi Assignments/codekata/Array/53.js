let a = "1 5 4 3 2".split(" ");
let b = a.slice(0).sort((a,b) => a-b);
let sum = 0;
for (var i=0; i<a.length; i++){
    if(a[i] !== b[i]){
        sum++;
    }
}
console.log(sum/2);
