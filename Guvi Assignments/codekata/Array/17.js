let a = "1 0 6 7 4 0 9".split(" ");
let b = [];
let result = "";
for (var i = 0; i<a.length; i = i + 2){
    if (a.slice(i,i+2).includes("0") && a.length-1 !== b.length){
        b[i] = a.indexOf("0",i) + 1;
        b[i+1] = a.indexOf("0",i+1) + 1;
    }else if (!(a.slice(i,i+2).includes("0")) && a.length-1 !== b.length){
        b[i] = -1;
        b[i+1] = -1;
}
}
console.log(b.join(" "));