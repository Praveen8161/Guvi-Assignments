let a = "apple";
for (var i of a){
    let sum = 0;
    for (var k of a){
        if(i === k){
            sum++;
        }
    }
    if(sum === 1){
        console.log(i);
        break;
    }
}