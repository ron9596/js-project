ddocument.addEventListener("DOMContentLoaded", () => {
    const emailField = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const passwordField = document.getElementById("password");
    const cpasswordField = document.getElementById("cpassword");
    const passwordError = document.getElementById("passwordError");
    const passwordStrength = document.getElementById("passwordStrength");
    const generateOtpBtn = document.getElementById("generateOtp");
    const otpField = document.getElementById("otp");
    const submitButton = document.getElementById("submitButton");
    const acceptCheckbox = document.getElementById("accept");
    const myForm = document.getElementById("myForm");

    let otpCountdown;

    // Email validation
    emailField.addEventListener("input", () => {
        const emailValue = emailField.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            emailError.textContent = "Invalid email format";
        } else {
            emailError.textContent = "";
        }
        checkFormValidity();
    });

    // Password strength indicator
    passwordField.addEventListener("input", () => {
        const passwordValue = passwordField.value;
        if (passwordValue.length < 8) {
            passwordStrength.textContent = "Weak";
            passwordStrength.style.color = "red";
        } else if (/^(?=.*[A-Z])(?=.*\d)/.test(passwordValue)) {
            passwordStrength.textContent = "Strong";
            passwordStrength.style.color = "green";
        } else {
            passwordStrength.textContent = "Medium";
            passwordStrength.style.color = "orange";
        }
        checkFormValidity();
    });

    // Password match validation
    cpasswordField.addEventListener("input", () => {
        if (passwordField.value !== cpasswordField.value) {
            passwordError.textContent = "Passwords do not match";
        } else {
            passwordError.textContent = "";
        }
        checkFormValidity();
    });

    // OTP generation
    generateOtpBtn.addEventListener("click", () => {
        const generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
        alert(`Your OTP is: ${generatedOtp}`);
    });

    // Form submission
    myForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevent page reload

        // Capture form data
        const formData = {
            name: document.getElementById("name").value,
            email: emailField.value,
            password: passwordField.value,
            cpassword: cpasswordField.value,
            age: document.getElementById("age").value,
            phone: document.getElementById("phone").value,
            otp: otpField.value,
            acceptedTerms: acceptCheckbox.checked
        };

        console.log("Form Submitted:", formData);

        // Show success message
        alert("Form submitted successfully!");

        // Reset form fields
        myForm.reset();

        // Clear validation messages
        emailError.textContent = "";
        passwordError.textContent = "";
        passwordStrength.textContent = "";

        // Disable submit button again after reset
        submitButton.disabled = true;
    });

    // Check form validity
    function checkFormValidity() {
        if (
            emailError.textContent === "" &&
            passwordError.textContent === "" &&
            passwordField.value.length >= 8 &&
            cpasswordField.value === passwordField.value &&
            acceptCheckbox.checked
        ) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
});
