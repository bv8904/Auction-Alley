let currentSlide = 0;
const totalSlides = document.querySelectorAll('.product-card').length;
const slider = document.querySelector('.product-slider');

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; // Slide each card fully
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

let cartCount = 0;
let currentBid = 0;
let auctionEndTime;
let timerInterval;

function addToCart() {
    cartCount++;
    document.getElementById("cart").innerText = `Cart (${cartCount})`;
    alert("Item added to cart!");
}

function buyNow() {
    alert("Proceeding to payment...");
}

function bidNow() {
    document.getElementById("customer-dashboard").style.display = "block";
    startBidding();
}

function startBidding() {
    let currentBid = 500; // Initial bid amount
    let bidEndTime = new Date().getTime() + 30 * 1000; // 30 seconds

    let timer = setInterval(() => {
        let now = new Date().getTime();
        let distance = bidEndTime - now;

        if (distance <= 0) {
            clearInterval(timer);
            alert("Bidding ended! Winner proceeds to payment.");
            document.getElementById("time-remaining").innerText = "Time Remaining: 00:00";
            document.getElementById("customer-dashboard").style.display = "none";
        } else {
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("time").innerText = `00:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}

function openAuction(productName, startingBid, duration) {
    console.log("openAuction called for", productName); // Debugging line
    currentBid = startingBid;
    auctionEndTime = Date.now() + duration * 1000; // duration in seconds

    document.getElementById('auction-title').innerText = productName;
    document.getElementById('current-bid').innerText = currentBid;
    document.getElementById('bid-message').innerText = '';
    document.getElementById('bid-amount').value = '';
    document.getElementById('time-remaining').innerText = `Time remaining: ${duration} seconds`;

    document.querySelector('.auction-modal').style.display = 'block';
    updateTimer();
}

function closeAuction() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    document.querySelector('.auction-modal').style.display = 'none';
}

function placeBid() {
    const bidAmount = parseFloat(document.getElementById('bid-amount').value);
    if (bidAmount > currentBid) {
        currentBid = bidAmount;
        document.getElementById('current-bid').innerText = currentBid;
        document.getElementById('bid-message').innerText = 'Bid placed successfully!';
        document.getElementById('bid-amount').value = '';
    } else {
        document.getElementById('bid-message').innerText = 'Your bid must be higher than the current bid.';
    }
}

function updateTimer() {
    timerInterval = setInterval(() => {
        const timeLeft = Math.max(0, Math.floor((auctionEndTime - Date.now()) / 1000));
        document.getElementById('time-remaining').innerText = `Time remaining: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('bid-message').innerText = 'Auction has ended.';
            document.getElementById('bid-amount').disabled = true;
        }
    }, 1000);
}

// Ensure modal is closed on page load
window.onload = function() {
    closeAuction();
};
