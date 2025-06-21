// Pseudocode:
// 1. Define a function showForm(formType) to toggle between login and signup forms.
// 2. On page load, ensure only the login form is visible by default.
// 3. Add event listeners to the form toggle buttons if not using inline onclick.
// 4. Optionally, prevent double submission and add basic client-side validation feedback.

function showForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    if (formType === 'login') {
        loginForm.style.display = '';
        signupForm.style.display = 'none';
    } else if (formType === 'signup') {
        loginForm.style.display = 'none';
        signupForm.style.display = '';
    }
}

// Ensure correct form is shown on page load
document.addEventListener('DOMContentLoaded', function() {
    showForm('login');
});
