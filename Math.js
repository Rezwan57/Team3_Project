class MathClass {
    
    // Method for multiplication
    multiply(a, b) {
        return a * b;
    }

    // Method for division
    divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero is not allowed";
        }
        return a / b;
    }
}

// Create an instance of MathClass
const math = new MathClass();

// Example usage of multiply method
const multiplyResult = math.multiply(5, 10);
console.log("The product is:", multiplyResult);  // Output: The product is: 50

// Example usage of divide method
const divideResult = math.divide(10, 2);
console.log("The division result is:", divideResult);  // Output: The division result is: 5

// Handling division by zero
const divideByZeroResult = math.divide(10, 0);
console.log("Division by zero result:", divideByZeroResult);