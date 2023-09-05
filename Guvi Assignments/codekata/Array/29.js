let goals = "95 85 75 12 11".split(" ").sort((a,b) => b-a);
let sumLast3Goal = +goals[goals.length-1] + +goals[goals.length-2] + +goals[goals.length-3];
let result = [];
for (var val of goals){
    result.push(val - sumLast3Goal);
}
console.log(result.join(" "));
