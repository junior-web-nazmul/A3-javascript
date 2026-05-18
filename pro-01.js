// Problem - 01  Divide the Asset
// রহিম করিম ২ ভাই।  তাদের বাবার একটা জমি আছে  যার ক্ষেত্রফল  area নামে একটা ভ্যারিয়েবলে সেভ করা আছে।  তাদের বাবা তাদের কে সমান  ২  ভাগে সম্পত্তি ভাগ করে দিতে চান। এখন ২ জন ঠিক কতটুকু জমি পাবে সেটা প্রোগ্রাম করে বের করো এবং নিচের মতো করে আউটপুট হিসেবে দেখাও।

/** Problem -01 ( Divide the Asset ) */
var area = 15;
var divide = area / 2;
// console.log(divide);

/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
if (money >= 25000) {
  console.log("laptop");
} else if (money >= 10000) {
  console.log("cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
for (i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i, "- medicine");
  } else {
    console.log(i, "- rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "docx.xpdf";
if (
  fileName.includes(".jpg") ||
  fileName.includes(".docx") ||
  fileName.includes("#")
) {
  console.log("store");
} else {
  console.log("delet");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
let domain = "@ph.ac.bd";
const email = student.name + student.roll + student.department + domain;
// console.log(email);

/** Problem 06 :  (Current Salary )  */
let basicsalary;
var experience = 30;
var startingSalary = 45000;
basicsalary = startingSalary;
let percentage = 5 / 100;
for (i = 1; i <= experience; i++) {
  basicsalary = basicsalary + basicsalary * percentage;
}
basicsalary = basicsalary.toFixed(2);
// console.log(basicsalary);
