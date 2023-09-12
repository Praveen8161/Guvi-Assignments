let a = "5";
let count = 0;
for(var i=1;i<= a;i++){
    if(i.toString() === i.toString().split("").reverse().join("")){
        count++;
    }
}
console.log(count);