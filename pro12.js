// Problem 12 - Employee Bonus Calculator
let employees = [
  { name: "Rahim", salary: 25000 },
  { name: "Karim", salary: 35000 },
  { name: "Hasan", salary: 18000 },
  { name: "Mim", salary: 42000 },
];
let totalBonus = 0;
for (const employee of employees) {
  if (employee.salary >= 40000) {
    //20% bonus
    const bonus = (employee.salary * 20) / 100;
    totalBonus += bonus;
    console.log(employee.name, "Bonus: ", bonus);
  } else if (employee.salary >= 30000) {
    // 15% bonus
    const bonus = (employee.salary * 15) / 100;
    totalBonus += bonus;
    console.log(employee.name, "Bonus: ", bonus);
  } else if (employee.salary >= 20000) {
    // 10% bonus
    const bonus = (employee.salary * 10) / 100;
    totalBonus += bonus;
    console.log(employee.name, "Bonus: ", bonus);
  } else {
    // 5% bonus
    const bonus = (employee.salary * 5) / 100;
    totalBonus += bonus;
    console.log(employee.name, "Bonus: ", bonus);
  }
}
console.log(totalBonus);
