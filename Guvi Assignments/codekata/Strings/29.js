let str = "abc aab abc aba".split(" ");
let result = [];
str.forEach((val,ind) => {
    if(str.indexOf(val) === ind){
        result.push("Verified");
    }else{
        let sum = 0;
        let ind1 = 0;
        for (var i of str){
            if(i === val && ind1 !== ind){
                sum++;
            }else if (i === val && ind1 === ind){
                result.push(val+sum);
                break;
            }
            ind1++;
        }
    }
});
console.log(result.join(" "));
