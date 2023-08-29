/*Input Description:
A positive integer is provided to you as an input.

Output Description:
Print the First 3 multiples of the number with single spaces between them as an output.

Sample Input :
2
Sample Output :
2 4 6 */

let val = userInput;
let ans = [];
for (i=1; i<4; i++)
{
   ans[i-1] = val*i
}
console.log(ans.join(" "))