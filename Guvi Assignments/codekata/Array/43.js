let a = "95 68 62 58 55 41 30".split(" ");
let b = "45 61".split(" ");
let finalArr = a.concat(b).sort((a,b)=>b-a);
let result = [];
for(var i of b){
    if(i == 45){
        result.push(6);
    }else{
        result.push(finalArr.indexOf(i)+1);
    }   
}
console.log(result.join(" "));