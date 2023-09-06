let a = "1 1 2 5 5".split(" ");
for (var i of a){
    let sum = 0;
    for (var k of a){
        if(k === i){
            sum++;
        }
    }
    if(sum == 1){
        console.log(i);
    }
}
