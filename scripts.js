document.addEventListener('DOMContentLoaded', () => {
// Login form submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Remove specific check for valid credentials
        // Example valid credentials for the demo
        // const validUsername = 'testuser';
        // const validPassword = 'testpassword';

        // Proceed with any entered values
        localStorage.setItem('username', username); // Store the username if needed
        window.location.href = 'bikes.html';
    });
}

    // Bike selection
    const bikeButtons = document.querySelectorAll('.bike button');
    if (bikeButtons.length > 0) {
        bikeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const bike = e.target.closest('.bike');
                const bikeId = bike.dataset.id;
                const bikeName = bike.querySelector('h3').textContent;
                const bikePrice = bike.querySelector('p').textContent;

                localStorage.setItem('bikeId', bikeId);
                localStorage.setItem('bikeName', bikeName);
                localStorage.setItem('bikePrice', bikePrice);

                window.location.href = 'date-time.html';
            });
        });
    }

    // Date and Time form submission
    const dateTimeForm = document.getElementById('dateTimeForm');
    if (dateTimeForm) {
        dateTimeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            localStorage.setItem('rentalDate', date);
            localStorage.setItem('rentalTime', time);

            window.location.href = 'payment.html';
        });
    }

  
// Payment form submission
const paymentForm = document.getElementById('paymentForm');
if (paymentForm) {
    // Set the amount field when the page loads
    const amountField = document.getElementById('amount');
    const bikePrice = localStorage.getItem('bikePrice');
    const amount = bikePrice.split(':')[1].trim();
    amountField.value = amount;

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // You can remove the card number length validation
        // if (cardNumber.length !== 16) {
        //     alert('Invalid card number');
        //     return;
        // }
        if (cvv.length !== 3) {
            alert('Invalid CVV');
            return;
        }

        localStorage.setItem('cardNumber', cardNumber); // Store the card number if needed
        localStorage.setItem('amount', amount);
        window.location.href = 'confirmation.html';
    });
}
    // Confirmation page
    if (window.location.pathname.endsWith('confirmation.html')) {
        const confirmDate = document.getElementById('confirmDate');
        const confirmTime = document.getElementById('confirmTime');
        const confirmAmount = document.getElementById('confirmAmount');

        const rentalDate = localStorage.getItem('rentalDate');
        const rentalTime = localStorage.getItem('rentalTime');
        const amount = localStorage.getItem('amount');

        if (confirmDate && confirmTime && confirmAmount) {
            confirmDate.textContent = rentalDate;
            confirmTime.textContent = rentalTime;
            confirmAmount.textContent = amount;
        }
    }
});
