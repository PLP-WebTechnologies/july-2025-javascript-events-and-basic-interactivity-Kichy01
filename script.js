//  THEME TOGGLE FEATURE 
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  // Add or remove the "dark-mode" class on body
  document.body.classList.toggle("dark-mode");

  // Update button text depending on mode
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "Switch to Light Mode";
  } else {
    themeToggleBtn.textContent = "Switch to Dark Mode";
  }
});

//  COUNTER GAME FEATURE 
let counter = 0; // Start at 0
const counterBtn = document.getElementById("counter-btn");
const counterDisplay = document.getElementById("counter-display");
const counterMessage = document.getElementById("counter-message");

counterBtn.addEventListener("click", () => {
  counter++; // Increase counter each click
  counterDisplay.textContent = counter; // Show updated number

  // Show fun feedback messages
  if (counter < 5) {
    counterMessage.textContent = "Keep going!";
  } else if (counter < 10) {
    counterMessage.textContent = "Nice, you’re on fire!";
  }
  else if (counter <15) {
   counterMessage.textContent = "You really wanna do this?";
  }
  else if (counter <20) {
    counterMessage.textContent = "You have to stop now..!"
  }
  else {
    counterMessage.textContent = "You are Unstoppable!";
  }
});

//  FORM VALIDATION FEATURE 
const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload on form submit

  // Collect input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let valid = true; // Flag to track if all validations pass

  //  Name Validation 
  if (name.length < 3) {
    document.getElementById("name-error").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  //  Email Validation  (basic regex check)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("email-error").textContent = "Please enter a valid email.";
    valid = false;
  } else {
    document.getElementById("email-error").textContent = "";
  }

  //  Password Validation 
  if (password.length < 6) {
    document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("password-error").textContent = "";
  }

  //  Final Form Feedback 
  const formMessage = document.getElementById("form-message");
  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully 🚀";
    form.reset(); // Clear form fields after success
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fix the errors above.";
  }
});
