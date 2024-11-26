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
const math = new MathClass();

const multiplyResult = math.multiply(5, 10);
console.log("The product is:", multiplyResult);  

const divideResult = math.divide(10, 2);
console.log("The division result is:", divideResult);  
const divideByZeroResult = math.divide(10, 0);
console.log("Division by zero result:", divideByZeroResult);

const math = new MathClass();
const result = math.Max(5, 10);
console.log("The maximum value is:", result);
