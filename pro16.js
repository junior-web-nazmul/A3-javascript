// Problem 16 - Online Store Order System 🛒
let orders = [
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Mouse", price: 80000, quantity: 2 },
  { product: "Keyboard", price: 1500, quantity: 1 },
  { product: "Monitor", price: 12000, quantity: 2 },
  { product: "Pen Drive", price: 700, quantity: 3 },
];

let grandPrice = 0;
let heightOrder = 0;
let highestProduct = "";
let count = 0;

for (const order of orders) {
  let total = order.price * order.quantity;
  console.log(`${order.product} = ${total}`);
  grandPrice += total;

  if (total > heightOrder) {
    heightOrder = total;
    highestProduct = order.product;
  }
  if (total > 10000) {
    console.log("Above 10000:", order.product);
    count++;
  }
}

console.log("Grand Price :", grandPrice);
console.log("height order price :", highestProduct, " = ", heightOrder);
console.log("count ", count);
