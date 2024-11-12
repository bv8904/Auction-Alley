document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.getElementById("paymentForm");
    const confirmationModal = document.getElementById("confirmationModal");
    const confirmBtn = document.getElementById("confirmBtn");

    // Validate card input
    const validateCardNumber = (number) => {
        const regex = /^[0-9]{16}$/;
        return regex.test(number.replaceAll("-", ""));
    };

    const validateExpiryDate = (date) => {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return regex.test(date);
    };

    const validateCVV = (cvv) => {
        const regex = /^[0-9]{3}$/;
        return regex.test(cvv);
    };

    // Handle form submission
    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;
        const cardHolder = document.getElementById("cardHolder").value;

        if (!validateCardNumber(cardNumber)) {
            alert("Invalid card number. Please enter a valid 16-digit card number.");
            return;
        }

        if (!validateExpiryDate(expiryDate)) {
            alert("Invalid expiry date. Please use MM/YY format.");
            return;
        }

        if (!validateCVV(cvv)) {
            alert("Invalid CVV. Please enter a 3-digit CVV.");
            return;
        }

        // Display confirmation modal
        confirmationModal.style.display = "flex";
    });

    // Close confirmation modal
    confirmBtn.addEventListener("click", () => {
        confirmationModal.style.display = "none";
        window.location.href = "success.html"; // Redirect to home page
    });
});
