// Problem 09 - Online Shopping Cart
let prices = [1200, 3000, 850, 2200, 450];
let total = 0;
for (i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log("total price:", total);

let max = prices[0];
for (i = 0; i < prices.length; i++) {
  if (prices[i] > max) {
    max = prices[i];
    console.log(max);
  }
}

let min = prices[0];
for (i = 0; i < prices.length; i++) {
  if (prices[i] < min) {
    min = prices[i];
  }
}
console.log(min);

let count = 0;
for (i = 0; i < prices.length; i++) {
  if (prices[i] > 1000) {
    count++;
  }
}
console.log(count);
