document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

        if (!name || !email || !address || !paymentMethod) {
            alert("Please fill out all fields and select a payment method.");
        } else {
            // we can add your payment processing logic based on the selected method
            alert("Payment processing logic goes here.");
        }
    });
});
