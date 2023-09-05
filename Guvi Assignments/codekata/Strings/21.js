let a = "ProFiLe";
let cas1 = 1;
let cas2 = 2;
let result = "";
if(cas1 === 1){
    for (var i=0;i<a.length;i++){
        if(cas2 === 1){
            result = a.toLowerCase();
            break;
        }else if(i === cas2-1){
            let temp = a[i].toLowerCase();
            result += temp;
            cas2 += cas2;
        }else{
            result += a[i]
        }
    }
}else if(cas1 === 2){
    for (var i=0;i<a.length;i++){
        if(cas2 === 1){
            result = a.toUpperCase();
            break;
        }else if(i == cas2-1){
            let temp = a[i].toUpperCase();
            result += temp;
            cas2 += cas2;
        }else{
            result += a[i]
        }
    }
}
console.log(result);