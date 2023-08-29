function removeAdjacentDuplicates(sentence) {
   const words = sentence.split(' ');
   const result = [];
 
   for (const word of words) {
     if (result.length === 0 || result[result.length - 1] !== word) {
       result.push(word);
     }
   }
 
   if (result.length === 0) {
     return '-1';
   } else {
     return result.join(' ');
   }
 }
 
//  // Input sentence
//  const inputSentence = prompt('Enter the input sentence:');
 
//  // Call the function and display the result
//  const outputSentence = removeAdjacentDuplicat
//  // Call the function and display the result
//  const outputSentence = removeAdjacentDuplicates(inputSentence);
//  console.log(outputSentence);

