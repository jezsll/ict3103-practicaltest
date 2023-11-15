const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// Function to validate password based on OWASP recommendations
function validatePassword(password) {
  // Minimum length of 8 characters
  if (password.length < 8) {
    return "Password should be at least 8 characters long.";
  }

  // Should contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return "Password should contain at least one uppercase letter.";
  }

  // Should contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return "Password should contain at least one lowercase letter.";
  }

  // Should contain at least one digit
  if (!/\d/.test(password)) {
    return "Password should contain at least one digit.";
  }

  // Should contain at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password should contain at least one special character.";
  }

  // If all checks pass, return null indicating a valid password
  return null;
}

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle login form submission
app.post("/login", (req, res) => {
  const password = req.body.password;

  // Validate the password
  const validationError = validatePassword(password);

  // Check if the password is valid
  if (validationError) {
    // Render the homepage with an error message
    res.sendFile(__dirname + "/index.html", { error: validationError });
  } else {
    // Render the welcome page with logout button
    res.send(`
      <h2>Welcome! Login successful</h2>
      <p>Password: ${password}</p>
      <form action="/logout" method="post">
        <button type="submit">Logout</button>
      </form>
    `);
  }
});

// Handle logout form submission
app.post("/logout", (req, res) => {
  // Redirect to the homepage
  res.redirect("/");
});

function isBlockedPassword(password) {
  // Function to check if the password is blocked (not implemented in the provided code)
  return false;
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
