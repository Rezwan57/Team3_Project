/********************************
Developer: Ubah Kahie
University ID: 240247612
Function: This class contains a method that takes two inputs as integers and returns their sum.
********************************/
class MathFunctions {
    static Add(x, y) {
        return x + y;
    }
<<<<<<< HEAD
}

// Testing the Add method by logging the result to the console
console.log(MathFunctions.Add(5, 3)); // Output will be 8
=======


    /********************************
    Developer: Rezwan Habib Youhana
    University ID: 240312596
    Function: This function takes two integer as input, the first number is the base and the second one is the coefficient, and returns a number (first variable) raised to a power (second variable) as result. For example, Power(2, 3) should return 8 as result.
    ********************************/
    static Power(base, exponent) {
        return Math.pow(base, exponent); // This now refers to the built-in Math object
    }
}

// Testing the Add method by logging the result to the console
console.log(MathFunctions.Add(5, 3)); // Output will be 8
console.log(MathFunctions.Power(2, 3)); // Output will be 8
>>>>>>> Rezwan-develop
