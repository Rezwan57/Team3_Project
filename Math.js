/********************************
Developer: Ubah Kahie
University ID: 240247612
Function: This class contains a method that takes two integers as inputs and returns their sum.
********************************/
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
