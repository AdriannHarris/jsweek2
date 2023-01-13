const monthNumber = prompt("Enter a number between 1 and 12:");

if (monthNumber < 1 || monthNumber > 12) {
  alert("Invalid number. Please enter a number between 1 and 12.");
} else {
  const months = ["January", "February", "March", "April", "May",
   "June", "July", "August", "September", "October", "November",
    "December"];
  console.log(`The month corresponding to the number ${monthNumber} is ${months[monthNumber - 1]}.`);
}