// script.js

// Retrieve the final bid amount from sessionStorage
const finalBidAmount = "5000";
const bidAmountElement = document.getElementById("final-bid-amount");


// Display the final bid amount on the billing page
bidAmountElement.textContent = finalBidAmount;

// Handle the click event for the "Proceed to Pay" button
document.getElementById("proceed-button").addEventListener("click", () => {
    // Store the final bid amount in sessionStorage for the payment page
    sessionStorage.setItem("paymentAmount", finalBidAmount);
    // Redirect to the payment page
    window.location.href = "payment.html";
});
