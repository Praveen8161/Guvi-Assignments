/*
Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

Input Description:
First line contains an integer A. Second line contains an Integer N.

Output Description:
Print the integer A, N times in a separate line.

Sample Input :
2 3
Sample Output :
2
2
2
*/
let a = userInput[0].split(" ");
for (i=0; i< +a[1]; i++)
{
    console.log(+a[0]);
}
