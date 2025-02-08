document.addEventListener("DOMContentLoaded", function () {
    // Handle contact form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from reloading page

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let response = document.getElementById("form-response");

        if (name && email && message) {
            response.innerText = "Thank you for reaching out! We will get back to you soon.";
            response.style.color = "green"; // Success message
            this.reset(); // Reset form fields
        } else {
            response.innerText = "Please fill out all fields.";
            response.style.color = "red"; // Error message
        }
    });

    // Toggle navigation menu on mobile
    const navbarIcon = document.querySelector('.navbar-icon');
    const navMenu = document.querySelector('nav ul');

    if (navbarIcon && navMenu) {
        navbarIcon.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
            navbarIcon.classList.toggle('active'); // Toggle "X" icon effect
        });
    }
});

