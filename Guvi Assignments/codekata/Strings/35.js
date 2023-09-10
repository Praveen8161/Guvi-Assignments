let a = "codekata".toLowerCase().split("").reverse().join("");
let vowels = "aeiou";
let result = "";
for(var i of a){
    if(!vowels.includes(i)){
        result += i;
    }
}
console.log(result);