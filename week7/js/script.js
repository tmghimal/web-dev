// Select elements by ID and class
const evenOddResult = document.querySelector('.evenOddResult');
const resultButton = document.querySelector('.result');
const numberInput = document.getElementById('inputNumber');

// Event listener to check even/odd when button is clicked
resultButton.addEventListener('click', () => {
  const inputValue = numberInput.value.trim();
  const parsedNumber = parseInt(inputValue, 10);

  if (!isNaN(parsedNumber)) {
    evenOddResult.textContent = parsedNumber % 2 === 0 ? 'Even' : 'Odd';
  } else {
    evenOddResult.textContent = 'Invalid input';
  }
});






// Multiplication table
const multiplication = document.getElementById('multiplication');
const multiplier = document.getElementById('multiplier');
const result = document.getElementById('result');
const inputNumber = document.getElementById('number');
const button = document.getElementById('generate');
const items = document.getElementById('items');
const error = document.getElementById('error');

function generateMultiplicationTable(number) {
  for (let i = 1; i <= number; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${number ? number : "1"}</td><td>x</td> <td>${i}</td><td>${number * i}</td>`;
    items.appendChild(row);
  }
}

button.addEventListener('click', () => {
  const number = parseInt(inputNumber.value.trim(), 10);
  if (!isNaN(number) && number > 0) {
    error.innerHTML = '';
    generateMultiplicationTable(number);
  } else {
    error.innerHTML = "Invalid Input data";
  }
});









// FizzBuzz
const fButton = document.getElementById('fizzResult')

function fizzBuzz() {
  const outputDiv = document.getElementById('output');
  let result = '';

  for (let i = 1; i <= 20; i++) {
    // Check if divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz<br>';
    }
    // Check if divisible by 3
    else if (i % 3 === 0) {
      result += 'Fizz<br>';
    }
    // Check if divisible by 5
    else if (i % 5 === 0) {
      result += 'Buzz<br>';
    }
    // Otherwise print the number itself
    else {
      result += `${i}<br>`;
    }
  }

  outputDiv.innerHTML = result;
}

// Call the fizzBuzz function
fButton.addEventListener('click', fizzBuzz)






// Right Angle Triangle
const startItems = document.getElementById('startItems');
const triangle = document.getElementById('triangle');
const triangleNumber = document.getElementById('patternNumber');

function printPattern(n) {
  if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive number");
    return;
  }

  startItems.innerHTML = '';

  for (let i = 1; i <= n; i++) {
    let stars = '';
    const li = document.createElement('li');

    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
    li.innerHTML = stars;
    startItems.appendChild(li);
  }
}

triangle.addEventListener('click', () => {
  const realNumber = parseInt(triangleNumber.value.trim(), 10);
  printPattern(realNumber);
});
