class MathClass {
    add(a, b) {
        return a + b;
    }

    Max(a, b) {
        return a > b ? a : b;
    }
}

const math = new MathClass();
const result = math.Max(5, 10);
console.log("The maximum value is:", result);  // Output: The maximum value is: 10