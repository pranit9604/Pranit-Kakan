// Function to count how many elements in the array are divisible by numbers from 1 to 9
function countMultiples(arr) {
    const result = {};
  
    for (let i = 1; i <= 9; i++) {
      result[i] = arr.filter(num => num % i === 0).length;
    }
  
    console.log(result);
  }
  
  // Example input
  const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  
  // Output will show count of elements divisible by each number from 1 to 9
  countMultiples(numbers);