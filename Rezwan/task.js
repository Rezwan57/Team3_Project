class MyMath {
    // Max function
    static Max(num1, num2) {
      return num1 > num2 ? num1 : num2;
    }
  
    // Min function
    static Min(num1, num2) {
      return num1 < num2 ? num1 : num2;
    }
  
    // Add function
    static Add(num1, num2) {
      return num1 + num2;
    }
  
    // Sub function
    static Sub(num1, num2) {
      return num1 - num2;
    }
  
    // Multi function
    static Multi(num1, num2) {
      return num1 * num2;
    }
  
    // Divide function
    static Divide(num1, num2) {
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
    }
  
    // Power function
    static Power(base, exponent) {
      return Math.pow(base, exponent); // This now refers to the built-in Math object
    }
  
    // Mod function
    static Mod(num1, num2) {
      if (num2 === 0) {
        throw new Error("Modulus by zero is not allowed.");
      }
      return num1 % num2;
    }
  }
  
  // Example usage
  console.log(MyMath.Max(10, 20)); // 20
  console.log(MyMath.Power(2, 3)); // 8
  