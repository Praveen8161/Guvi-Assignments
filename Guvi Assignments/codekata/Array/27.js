let a = "1 6 4 56 56 56 6 4 2".split(" ").sort((a,b) => a-b);
let count = {};
let val = [];
let sum = 1;
for (var i=0; i<a.length; i++){
    if(a[i] === a[i+1]){
        sum++
    }else{
        count[a[i]] = sum;
        val.push(sum); 
        sum = 1;
    }
}
let minVal = Math.min(...val);
let result = [];
Object.entries(count).forEach((value) => {
    if(minVal === value[1]){
        result.push(value[0]);
    }
})
console.log(result.sort((a,b)=>b-a).join(" "));
