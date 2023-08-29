let s = "We love we love".split(" ");

function remAdjWords(arr){
   let uniWords  = arr.slice(0,arr.length);
   let start;
   let len = 2;
   
   for (var i = 0; i<arr.length; i++){
      if(arr[i] === arr[i+1]){
         start = i;
         arr.splice(start,len);
         break;
      }
   }
   if(uniWords.length === arr.length){
      return arr
   }
      return remAdjWords(arr);
}

let result  = remAdjWords(s).join(" ");
console.log(result);