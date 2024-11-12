// Redirects to the main page
function openMainPage() {
    window.location.href = "page.html";
}

// Redirects to the login page
function openLoginPage() {
    window.location.href = "login.html";
}

// Redirects to the register page
function openRegisterPage() {
    window.location.href = "register.html";
}

// Simulate Google Login functionality
function continueWithGoogle() {
    alert("Redirecting to Google login..."); // Replace this with actual Google OAuth logic if available
    window.location.href = "page.html"; // Redirect to main page after login
}

// Handle form submission for login and register
function handleFormSubmit(event, type) {
    event.preventDefault(); // Prevent the form from actually submitting
    
    // Collect form data
    const email = event.target.email.value;
    const password = event.target.password.value;

    // For register page, check if passwords match
    if (type === "register") {
        const confirmPassword = event.target.confirm_password.value;
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
    }

    // Simulate login/register success (replace with backend authentication call)
    alert(`${type === "login" ? "Logging in" : "Registering"} as ${email}`);
    window.location.href = "page.html"; // Redirect to main page after successful login/register
}
