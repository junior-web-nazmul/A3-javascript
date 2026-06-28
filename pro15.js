// Problem 15 - Bank Account Manager 🏦

let account = {
  name: "Rahim",
  balance: 15000,
  transactions: [2000, -500, 3000, -1000, -200],
};

let totalDeposit = 0;
let totalWithdraw = 0;
let depositCount = 0;
let withdrawCount = 0;

const rohimTransactions = account.transactions;
for (const transaction of rohimTransactions) {
  if (transaction > 0) {
    totalDeposit += transaction;
    depositCount++;
  } else {
    totalWithdraw += -transaction;
    withdrawCount++;
  }
}
const finalBalance = account.balance + totalDeposit - totalWithdraw;

console.log("Total Deposit: ", totalDeposit);
console.log("Total withdraw: ", totalWithdraw);
console.log("Total Deposit count: ", depositCount);
console.log("Total withdraw count: ", withdrawCount);
console.log("final Balance: ", finalBalance);
