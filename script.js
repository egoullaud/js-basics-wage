var hourlyWage = prompt("what is your hourly wage?");
var hoursWorked = prompt("How many hours do you work per week?");
var moneyMade = hourlyWage * hoursWorked;

console.log(
  `I work ${hoursWorked} hours a week, and earn $${hourlyWage} an hour. Each week I make $${moneyMade}.`
);
