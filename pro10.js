// Problem 10 - Password Validator 🔐
let password = "J2spaytuh g6";
const space = " ";
let hasnumber = false;
let hasspace = false;

for (const pass of password) {
  if (pass >= "0" && pass <= "9") {
    hasnumber = true;
  }
  if (pass === space) {
    hasspace = true;
  }
}

if (password.length < 8) {
  console.log("Weak password");
} else if (hasspace) {
  console.log("Password should not contain space");
} else if (!hasnumber) {
  console.log("Add at least one number");
} else {
  console.log("Valid password");
}
