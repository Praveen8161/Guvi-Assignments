/* Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

Input Description:
A single line containing 2 integers separated by space.

Output Description:
Print the HCF of the integers.

Sample Input :
2 3
Sample Output :
1 */
let [a,b] = userInput[0].split(" ");
let small = Math.min(a,b);
let hcf = 0;
for (i=small; i>0; i--)
{
    if(a%i === 0 && b%i === 0)
    {
        hcf = i;
        break;
    }
}
console.log(hcf);