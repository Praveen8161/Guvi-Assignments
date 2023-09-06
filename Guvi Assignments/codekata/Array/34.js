let a = [ '5', '1 60', '2', '1 58', '2', '1 69' ];
let sto = [];
let result = [];

for (var i of a){
    let val = i.split(" ");
    if(val.length === 2 && val[0] == 1){
        sto.push(val[1]);
    }else if (val.length === 1 && val == 2){
        result.push(Math.min(...sto));
    }
}
console.log(result.join(" "));
