/* Write a code get an integer number as input and print the odd and even digits of the number separately.

Input Description:
A single line containing an integer.

Output Description:
Print the even and odd integers of the integer in a separate line.

Sample Input :
1234
Sample Output :
2 4
1 3 */
let num = userInput[0].split("");
let even = [];
let odd  = [];

for (i=0; i<num.length; i++)
{
    if(num[i]%2 === 0 || num[i] === 0)
    {
        even.push(num[i]);
        
    }else if (num[i]%2 != 0 )
    {
        odd.push(num[i]);
    }
}
even.sort((a,b) => a-b);
odd.sort((a,b) => a-b);

console.log(even.join(" "));
console.log(odd.join(" "));
