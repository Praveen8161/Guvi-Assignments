let input = "aaakaa";
let sum = 0;
for (var i=0; i<input.length-2;i++){
    if(input[i] === input[i+1] && input[i] === input[i+2]){
        sum++
    }
}
console.log();