/*
Create a function called startCounter that takes an integer n and a delay in milliseconds. 
The function should print integers starting from 1 up to n at each delay interval.

Requirements:
The function should use setInterval to print integers.
If n is less than 1, the function should immediately print "Invalid input".
*/
function startCounter(n, delay) {
    // Implement this function
    if (n < 1) {
        return console.log("Invalid input");
    }
    let integer = 1;
    setInterval(() => {
        if (integer <= n) {
            console.log(integer);
            integer++;
        } else {
            return;
        }
    }, delay);
}

module.exports = startCounter;
