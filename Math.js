// finaly=ly i have merged from my branch nanda-develop to develop
class MathClass {
    
    
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
console.log("The product is:", multiplyResult);  

// Example usage of divide method
const divideResult = math.divide(10, 2);
console.log("The division result is:", divideResult);  


const divideByZeroResult = math.divide(10, 0);
console.log("Division by zero result:", divideByZeroResult);