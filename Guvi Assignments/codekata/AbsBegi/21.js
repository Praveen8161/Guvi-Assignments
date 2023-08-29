/*
Write a code to get an integer N and print the sum of  values from 1 to N.

Input Description:
A single line contains an integer N.

Output Description:
Print the sum of values from 1 to N.

Sample Input :
10
Sample Output :
55
*/
let a = +userInput[0];
let sum = 0;
for (i=1; i<=a; i++)
{
    sum += i;
}
console.log(sum);
