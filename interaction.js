const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', event => {
  // Prevent the form from being submitted to the server
  event.preventDefault();

  // Calculate and display the sum of the numbers
  calculateSum();
  displayDate();
});

button.addEventListener('click', event => {
  // Calculate and display the sum of the numbers
  calculateSum();
  displayDate();
});

function calculateSum() {
  // Get the user's input
  var num1 = document.getElementById("number1");
  var num2 = document.getElementById("number2");
  var num3 = document.getElementById("number3");

  const number1 = num1.value;
  const number2 = num2.value;
  const number3 = num3.value;

  // Calculate the sum
  let sum = 0;
  sum += parseInt(number1, 10);
  sum += parseInt(number2, 10);
  sum += parseInt(number3, 10);

  // Get the current date



  // Display the sum in the output element
  document.querySelector('#sum').innerHTML = sum;
}

function displayDate(){

  var currentDate = new Date();

  // Get the current month, day, and year
  var currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  var currentDay = currentDate.getDate();
  var currentYear = currentDate.getFullYear();

  // Create the label text
  var labelText = "Today is " + currentMonth + "/" + currentDay + "/" + currentYear;

  // Get the label element
  var labelElement = document.getElementById("current-date-label");

  // Set the label's text
  //labelElement.querySelector('#current-date-label').innerHTML = labelText;   

  labelElement.innerHTML = labelText;

}
