let a = 7;
let mon1 = 0;
let mon2 = 1000;
let sum = 1000;
for (var i=1;i<=a;i++){
    mon3 = mon1 + mon2;
    sum += mon3
    mon1 = mon2;
    mon2 = mon3;
}
console.log(sum);