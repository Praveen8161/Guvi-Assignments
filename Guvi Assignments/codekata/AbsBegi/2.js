/*Input Description:
Three numbers are provided to you.

Output Description:
Find and print the largest among the three

Sample Input :
1
2
3
Sample Output :
3 */

let val = 0;
  for (i=0; i<userInput.length; i++)
  {
    if (userInput[i]>val)
    {
        val = +userInput[i];
    }
  }
  console.log(val);