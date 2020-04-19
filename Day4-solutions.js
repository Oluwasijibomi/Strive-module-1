
​
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
​function areaOfRectangle(a,b) {
    result = a * b 
    return result;
 }
 
 console.log(areaOfRectangle(4,5))
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
​
function crazySum(a,b) {
    let result;
    if (a === b) {
        result = ((a+b)*3)
        return result;
    } else result = "Not the same"
    return result;
}

console.log(crazySum(4,5))


/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
​
function crazyDiff(a) {
    var result;
    if (a > 19) {
        result = ((a - 19) * 3)
        return result;
    } else {
        return "Not greater than 19"
    }

}

console.log(crazyDiff(20));




/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
​
function boundary(n) {
  if (n < 100 || n === 400){
    var result;
    result = true
    return result;
  }
  else {
    return false
  }
}

console.log(boundary(200))



/* WRITE YOUR CODE HERE */
​
/* EXERCISE 5
Write a function "strivify" which accepts a string S. 
Add to S "Strive" in front of a given string, 
if the given string begins with "Strive" 
then return the original string.
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
​
function check3and7(x) {
  var result;
  if (x % 3 === 0 || x % 7 === 0) {
    result = "It is Divisible";
    return result;
  }
  else {
     return false;
  }
}

console.log(check3and7(9));



/* WRITE YOUR CODE HERE */
​
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
​
function reverse(s){
    return s.split("").reverse().join("");
}

console.log(reverse("Hello"));

/* WRITE YOUR CODE HERE */
​
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
​
/* WRITE YOUR CODE HERE */
​
​
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor