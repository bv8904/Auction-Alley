document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');
  const placeBidButton = document.getElementById('placeBidButton');
  const bidAmountInput = document.getElementById('bidAmount');
  const currentBidPriceSpan = document.getElementById('currentBidPrice');
  const basePriceSpan = document.getElementById('basePrice');
  const message = document.getElementById('message');

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const itemName = urlParams.get('item');
  const currentBidPrice = parseFloat(urlParams.get('currentBid'));
  const basePrice = parseFloat(urlParams.get('basePrice'));

  // Set the base and current bid prices in the popup
  basePriceSpan.textContent = basePrice;
  currentBidPriceSpan.textContent = currentBidPrice;

  // Show the popup
  popup.style.display = "block";

  // Close the popup
  closePopup.onclick = function() {
      popup.style.display = "none";
  }

  // Place bid button functionality
  placeBidButton.onclick = function() {
      const bidAmount = parseFloat(bidAmountInput.value);
      if (isNaN(bidAmount)) {
          message.textContent = "Please enter a valid number.";
          return;
      }

      if (bidAmount <= currentBidPrice) {
          message.textContent = "Your Bid is less than the current Bid.";
      } else {
          currentBidPriceSpan.textContent = bidAmount; // Update current bid price
          message.textContent = "Bid placed Successfully.";
      }
  }

  // Close the popup if the user clicks anywhere outside of it
  window.onclick = function(event) {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  }
});