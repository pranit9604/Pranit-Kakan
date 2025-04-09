// This function generates odd numbers up to a count
// For even input, it excludes the last odd number
function generateModifiedSeries(x) {
    const result = [];
  
    for (let i = 1; result.length < x; i += 2) {
      result.push(i);
    }
  
    if (x % 2 === 0) {
      result.pop(); // remove last number if input is even
    }
  
    console.log(result.join(', '));
  }
  
  // Example usage
  generateModifiedSeries(6); // Output: 1, 3, 5, 7, 9