// Problem 07 - Smart Result System
let marks = [78, 45, 90, 62, 55];
let sum = 0;
let isFail = true;
for (i = 0; i < marks.length; i++) {
  //   sum = sum + marks[i];
  sum += marks[i];
}
console.log(sum);
const average = sum / 5;
console.log(average);
if (average >= 80) {
  console.log("A+");
} else if (average >= 60) {
  console.log("A");
} else if (average >= 40) {
  console.log("pass");
} else if (average <= 33) {
  console.log("fail");
}
