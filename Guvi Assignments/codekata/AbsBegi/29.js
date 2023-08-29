/* Write a code to get an integer N and print the even values from 1 till N in a separate line.

Input Description:
A single line contains an integer N.

Output Description:
Print the even values from 1 to N in a separate line.

Sample Input :
6
Sample Output :
2
4
6 */
let a = +userInput[0];
for (let i=1; i<=a; i++)
{
    if(i%2 === 0)
    {
        console.log(i);
    }
}