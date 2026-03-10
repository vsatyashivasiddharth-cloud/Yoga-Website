// Logic to make sure our "Plan Your Visit" links work smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
   
    });
});

// Function to show pose instructions in a pop-up
function showPose(message) {
    alert(message);
}

// Your existing discount function (keep this if you have it)
function calculateDiscount(price) {
    let studentPrice = price * 0.8; // 20% discount
    alert("The special student price is: ₹" + studentPrice.toFixed(2));
}

function bookSeat() {
    // 1. Ask for the user's name
    let name = prompt("Welcome to VA Yoga! Please enter your name:");

    // 2. Check if the user entered a name (didn't hit cancel)
    if (name) {
        // 3. Ask which plan they want
        let plan = prompt("Which plan are you interested in? (1-Month, 3-Months, or 12-Months)");

        if (plan) {
            alert("Namaste, " + name + "! \n\nYour request for the " + plan + " months plan has been received. Our team will contact you shortly to finalize your booking. See you on the mat!");
        } else {
            alert("Namaste, " + name + "! Please let us know your preferred plan next time.");
        }
    }
}