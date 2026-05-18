// problem 01  banking
let depositAmount = 20000;
let year = 5;
let orginalAmount = depositAmount;
let percentage = 10 / 100;
for (i = 1; i <= year; i++) {
  orginalAmount = orginalAmount + orginalAmount * percentage;
}
// console.log(orginalAmount.toFixed(2));

// Problem 02 : Bonus Salary System
let startingSalary2 = 30000;
let year2 = 10;
let basicsalary2 = startingSalary2;
// 5% increase
let percebtage2 = 5 / 100;
for (let i = 0; i <= year2; i++) {
  basicsalary2 = basicsalary2 + basicsalary2 * percebtage2;
  if (basicsalary2 >= 50000) {
    basicsalary2 = basicsalary2 + 2000;
  } else {
    basicsalary2;
  }
}
// console.log(basicsalary2.toFixed(2));

// Problem 03 : Compound Saving Challenge
let savingAmount = 10000;
let year3 = 4;
let savingAmounts = savingAmount;
let interest = 4 / 100;
for (i = 1; i <= year3; i++) {
  savingAmounts = savingAmounts + savingAmounts * interest;
}
// console.log(savingAmounts.toFixed(2));

// Problem 04 : Smart Loan System
let loan = 500000;
let addMoney = 80000;
let year4 = 0;
let interest4 = 12 / 100;

while (loan > 0) {
  loan = loan + loan * interest4;
  // console.log(loan, "loan");

  loan = loan - addMoney;
  // console.log(loan);
  year4++;
  console.log("Year4:", year);
  console.log("Remaining Loan:", loan.toFixed(2));
}
console.log("Loan finished in", year4, "years");
