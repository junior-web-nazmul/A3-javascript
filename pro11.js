// Problem 11 - Student Finder
let students = ["Rahim", "Karim", "Hasan", "Jihad", "Mim"];
let hasStudent = false;
let searchName = "Hasans";
for (const student of students) {
  if (student === searchName) {
    hasStudent = true;
  }
}
if (hasStudent) {
  console.log("Student found");
} else {
  console.log("Student not found");
}
