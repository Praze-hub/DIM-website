document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading page

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-response").innerText = "Thank you for reaching out! We will get back to you soon.";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-response").innerText = "Please fill out all fields.";
    }
});

// Toggle navigation menu on mobile
const navbarIcon = document.querySelector('.navbar-icon');
const navMenu = document.querySelector('nav ul');

navbarIcon.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

