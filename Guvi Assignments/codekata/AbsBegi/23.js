/*
Write a code get an integer number as input and print the sum of the digits.

Input Description:
A single line containing an integer.

Output Description:
Print the sum of the digits of the integer.

Sample Input :
124
Sample Output :
7
*/
let a = userInput[0];
let sum = 0;
for (i=0; i<a.length; i++)
{
    sum += +a[i];
}
console.log(sum);