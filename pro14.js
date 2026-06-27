// Problem 14 - Product Inventory Manager 📦
let products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 12 },
  { name: "Monitor", stock: 2 },
  { name: "Headphone", stock: 0 },
];
let inStock = 0;
let outOfStock = 0;
let totalPro = 0;
console.log("out of stock products");

for (const product of products) {
  totalPro += product.stock;
  if (product.stock > 0) {
    inStock++;
  } else {
    outOfStock++;
    console.log(product.name);
  }
}
console.log(inStock, outOfStock, totalPro);
