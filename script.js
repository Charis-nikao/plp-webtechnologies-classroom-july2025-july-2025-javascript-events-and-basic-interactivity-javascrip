// ===========================
// Part 1: Event Handling + Theme Toggle
// ===========================
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===========================
// Part 2: Counter Game
// ===========================
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increase").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

document.getElementById("reset").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// ===========================
// Part 2: FAQ Section (Collapsible)
// ===========================
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ===========================
// Part 3: Form Validation
// ===========================
const form = document.getElementById("registerForm");
const messages = document.getElementById("formMessages");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting immediately
  messages.innerHTML = ""; // clear old messages

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let valid = true;

  // Name validation
  if (name.length < 3) {
    messages.innerHTML += "<p>Name must be at least 3 characters long.</p>";
    valid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    messages.innerHTML += "<p>Please enter a valid email address.</p>";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    messages.innerHTML += "<p>Password must be at least 6 characters long.</p>";
    valid = false;
  }

  // Success message
  if (valid) {
    messages.innerHTML = "<p style='color:green;'>Form submitted successfully! 🎉</p>";
    form.reset();
  }
});
