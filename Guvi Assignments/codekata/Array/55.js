let s1 = "amazon";
let s2 = "azonam".split("");
for (var i=0; i<2; i++){
    // let temp = s.pop();
    s2.unshift(s2.pop());
}
if(s1 === s2.join("")){
    console.log(1);
}else{
    console.log(0);
}