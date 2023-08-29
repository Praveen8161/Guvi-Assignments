/*let intvar = 25;
let strvar = "praveen";
let boovar = true;
let arrvar = [30,30.5,"selvi",false,50,"45"];
let objvar = {"name":"Praveen","age":26,"city":"salem"};
console.log(objvar) */

let s = "I am john cena cena john".split(" ");

function remAdjWords(arr){
   let uniWords = arr;
   let start;
   let len = 1;
   for (var i in uniWords){
      if(uniWords[i] === uniWords[i+1]){
         start = i;
         uniWords.splice(start,len);
         break;
      }else{
         return uniWords;
      }
   }
      return remAdjWords(uniWords);
}
let result  = remAdjWords(s);
console.log(result);