let a = 7;
let val = "10 7 9 3 2 1 15".split(" ");
let result = [];
for (var i=0; i<a; i++){
    let tempVal;
    for (var k=i+1;k<a;k++){
        if(+val[i]>+val[k]){
            tempVal = val[k];
            break;
        }
    }
    if(tempVal === undefined){
        result.push(-1);
    }else{
        result.push(tempVal);
    }
}
console.log(result.join(" "));