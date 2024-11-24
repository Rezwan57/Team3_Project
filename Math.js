/********************************
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
}

const math = new MathClass();
const result = math.Max(5, 10);
console.log("The maximum value is:", result);
