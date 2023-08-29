let s = "I am john cena cena john monday".split(" ");
console.log(s);
let result = [];
let case1 = [];
let case2 = [];
function dupRemover(case1,case2) {
   for (var j = 0;j<case1.length; j++){
         if (case2.includes(case1[j])){
            if(case1[j] === case2[j]){
               continue;
            }
         }else{
            result.push(case1[j]);
         }
   }
}
for (var i=0; i<s.length; i++){
   if (s[i] !== s[i+1]){
      result.push(s[i]);
   }else if (s[i] === s[i+1]){
      result = [];
      case1 = case1.concat(s.slice(0,i+1));
      case2 = case2.concat(s.slice(i+1)).reverse();
      dupRemover(case1,case2);
      break;
   }
}
console.log(result.join(" "));