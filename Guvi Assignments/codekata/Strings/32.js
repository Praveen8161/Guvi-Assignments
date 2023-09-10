let names = "john johnny jackie johnny john jackie jamie jamie john johnny jamie johnny john".split(" ").sort();
let sum = 0;
let finalName;
let rep = 1;
for (var i=0;i<names.length;i++){
    if(names[i] === names[i+1]){
        rep++;
    }else if(names[i] !== names[i+1] && rep > sum){
        sum = rep;
        rep = 1;
        finalName = names[i];
    }
}
console.log(finalName,sum);
