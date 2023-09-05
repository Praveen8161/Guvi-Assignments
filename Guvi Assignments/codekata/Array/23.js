let a = 3;
let details = "Karthik 23000 rohan 81734 varshini 12343".split(" ");
let salary = [];
for (var i=1; i<a*2; i+=2){
    salary.push(details[i]);
}

salary.sort((a,b) => a-b);
for (var n=0 ;n<a ;n++){
    console.log(details[details.indexOf(salary[n])-1]);
}