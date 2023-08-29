/* You are given the coefficients of a quadratic equation in order A, B & C.

Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.

Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.

Write a program to find all of the roots of the quadratic.

Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.

Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

Input Description:
Three numbers corresponding to the coefficients of x(squared), x and constant are given as an input in that particular order

Output Description:
Print the two values of X after rounding off to 2 decimal places if required.

Sample Input :
1 5 6
Sample Output :
-2.00
-3.00 */
let ent = userInput[0].split(" ");
let a = +ent[0];
let b = +ent[1];
let c = +ent[2];

let val1 = ( ( -b + ( Math.sqrt( (b*b) - (4*a*c) ) ) )  /  (2*a) );
let val2 = ( ( -b - ( Math.sqrt( (b*b) - (4*a*c) ) ) )  /  (2*a) );

console.log(val1.toFixed(2));
console.log(val2.toFixed(2));