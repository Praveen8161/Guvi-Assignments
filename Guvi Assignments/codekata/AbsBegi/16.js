/*
Let "A"  be a string. Remove all the whitespaces and find it's length.

Input Description:
A string is provide as an input

Output Description:
Remove all the whitespaces and then print the length of the remaining string.

Sample Input :
Lorem Ipsum
Sample Output :
10
*/
let a = userInput[0].split("");
for (i=0; i<a.length; i++)
{
    if (a[i]==0)
    {
        a.splice(i,1);
        
    }
}
a.join("");
console.log(a.length);
