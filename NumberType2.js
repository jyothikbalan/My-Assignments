function checkNumberType(number) {
    let result; // Step 2: declare the variable

    if (number > 0) {
        result = "The number is positive";
    } else if (number < 0) {
        result = "The number is negative";
    } else {
        result = "The number is zero";
    }

    return result; // Step 4: return the result
}

// Step 5: Call the function and print the result
console.log(checkNumberType(5));     // Example: positive
console.log(checkNumberType(-3));    // Example: negative
console.log(checkNumberType(0));     // Example: zero
