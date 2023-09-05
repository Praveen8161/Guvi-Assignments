let a = "1 -2 -3 -4 5 6 -7".split(" ");
let b = +"3";
let result = [];
let temp;
for (var i = 0; i<a.length; i++){
    temp = a.slice(i,i+b);
    if(temp.length !== b){
        break;
    }else{
        let cou = 0;
        for (var j = 0; j < b; j++){
            if(temp[j]<0 && cou === 0){
                result.push(temp[j]);
                cou++;
            }
        }
        if(cou === 0){
            result.push(0);
        }
    }
}
console.log(result.join(" "));