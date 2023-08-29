/*
You are provided with a number, "N". Find its factorial.

Input Description:
A positive integer is provided as an input.

Output Description:
Print the factorial of the integer.

Sample Input :
2
Sample Output :
2
*/
let num = userInput[0];
num = +num;
let fac = 1;

if ((num === 0) && (num === 1))
{
    
    console.log(1);
    
}else if(num < 0)
{
    console.log("Error, Please check if the number is positive number");
}else
{
    for (i= 1; i<=num; i++)
    {
        fac = fac * i;
    }
    console.log(fac);
}