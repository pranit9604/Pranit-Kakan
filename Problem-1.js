// A simple calculator class that performs basic arithmetic operations
class Calculator {
    constructor(a, b, operation) {
      this.a = parseFloat(a); // converting input to float
      this.b = parseFloat(b);
      this.operation = operation.toLowerCase(); // convert operation to lowercase
    }
  
    calculate() {
      // Perform operation based on input
      switch (this.operation) {
        case 'add':
          return this.a + this.b;
        case 'subtract':
          return this.a - this.b;
        case 'multiply':
          return this.a * this.b;
        case 'divide':
          return this.b !== 0 ? this.a / this.b : 'Error: Division by zero';
        default:
          return 'Invalid operation provided';
      }
    }
  }
  
  // Example usage
  const calc = new Calculator(20, 4, 'divide');
  console.log('Result:', calc.calculate());