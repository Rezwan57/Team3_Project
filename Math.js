/********************************
Developer: Ubah Kahie
University ID: 240247612
Function: This class contains a method that takes two integers as inputs and returns their sum.

Developer: Mohamed Sbai
University ID: 240361804
Function: : This function takes two integer as input and returns the maximum one.
********************************/
class MathClass {
    add(a, b) {
        return a + b;
    }

    Max(a, b) {
        return a > b ? a : b;
    }
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
}

const math = new MathClass();
const result = math.Max(5, 10);
console.log("The maximum value is:", result);
