/*
You will be provided with a number. Print the number of days in the month corresponding to that number.

Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

Input Description:
The input is in the form of a number.

Output Description:
Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

Sample Input :
8
Sample Output :
31
*/

let monNum = userInput[0];

if (monNum == 1 || monNum == 3 || monNum == 5 || monNum == 7 || monNum == 8 || monNum == 10 || monNum == 12)
{
    console.log(31);

}else if (monNum == 4 || monNum == 6 || monNum == 9 ||monNum == 11)
{
    console.log(30);

}else if (monNum == 2)
{
    console.log(28);

}else 
{
    console.log("Error");

}