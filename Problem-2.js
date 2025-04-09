// Function to generate the first 'x' odd numbers
function generateOddSeries(x) {
    const result = [];
  
    for (let i = 0; i < x; i++) {
      result.push(2 * i + 1); // formula to get odd number
    }
  
    console.log(result.join(', '));
  }
  
  // Example: Will print first 4 odd numbers
  generateOddSeries(4); // Output: 1, 3, 5, 7