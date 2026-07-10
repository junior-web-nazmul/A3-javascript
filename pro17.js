// Problem 17 - Shopping Cart Manager 🛒 (Mini Project)
let carts = [
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Mouse", price: 800, quantity: 2 },
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Keyboard", price: 1500, quantity: 1 },
  { product: "Mouse", price: 800, quantity: 3 },
  { product: "Monitor", price: 12000, quantity: 1 },
];

let summary = {};
let total = 0;
let heightQuantity = 0;
let expensivetotal = 0;
let heightProduct = "";
for (const cart of carts) {
  let name = cart.product;
  total += cart.price * cart.quantity;
  if (summary[name]) {
    summary[name] += cart.quantity;
  } else {
    summary[name] = cart.quantity;
  }

  if (cart.price > 10000) {
    expensivetotal += cart.price * cart.quantity;
  }
}
for (const product in summary) {
  //   console.log(summary[product]);
  if (summary[product] > heightQuantity) {
    heightQuantity = summary[product];
    heightProduct = product;
  }
}

console.log(summary);
console.log("grand total :", total);
console.log("expensive total :", expensivetotal);
console.log("height quantity product =", heightProduct, " : ", heightQuantity);
