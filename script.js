// JavaScript Fundamentals

// Declare variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

// Define functions for basic arithmetic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return "Error: Division by zero";
    }
    return a / b;
}

// Call the functions and log the results
console.log("Add: " + add(10, 5));
console.log("Subtract: " + subtract(10, 5));
console.log("Multiply: " + multiply(10, 5));
console.log("Divide: " + divide(10, 5));

// DOM Manipulation

// Get references to the buttons and input fields
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultInput = document.getElementById('result');

// Function to update the result field
function updateResult(result) {
    resultInput.value = result;
}

// Add event listeners to the buttons
addBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = add(num1, num2);
    console.log("Add: " + result);
    updateResult(result);
});

subtractBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = subtract(num1, num2);
    console.log("Subtract: " + result);
    updateResult(result);
});

multiplyBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = multiply(num1, num2);
    console.log("Multiply: " + result);
    updateResult(result);
});

divideBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = divide(num1, num2);
    if (result !== "Error: Division by zero") {
        console.log("Divide: " + result);
    }
    updateResult(result);
});

// Interactive Charts and Graphs using Chart.js

// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create a chart
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});