function isOddOrEven(number){
let result ;
if (number %2 === 0){
    result="This is an even number"
}
else {
    result="This is an odd number"
}
return result
}


console.log(isOddOrEven(5));
console.log(isOddOrEven(10));




/*function isOddOrEven(number) {
    let result; // Step 2: declare the variable

    if (number % 2 === 0) {  
        result = "Even";
    } else {
        result = "Odd";
    }

    return result;
}

// Step 4: Call the function and print the result
console.log(isOddOrEven(10)); // Even
console.log(isOddOrEven(7));  // Odd
console.log(isOddOrEven(0));  // Even*/