// document.addEventListener("DOMContentLoaded", function () {
//     // Handle contact form submission
//     document.getElementById("contact-form").addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent form from reloading page

//         let name = document.getElementById("name").value.trim();
//         let email = document.getElementById("email").value.trim();
//         let message = document.getElementById("message").value.trim();
//         let response = document.getElementById("form-response");

//         if (name && email && message) {
//             response.innerText = "Thank you for reaching out! We will get back to you soon.";
//             response.style.color = "green"; // Success message
//             this.reset(); // Reset form fields
//         } else {
//             response.innerText = "Please fill out all fields.";
//             response.style.color = "red"; // Error message
//         }
        
//     });
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", async function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let response = document.getElementById("form-response");

        if (name && email && message) {
            let formData = { name, email, message };

            try {
                let res = await fetch("https://script.google.com/macros/s/AKfycbx3CqBjW-iYft869u31aL0hUB0HhpiwzOnh8Z87sofOyn2J2RBfJ9JL9WQjOl9eKk4pxA/exec", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                let result = await res.json();
                response.innerText = result.message;
                response.style.color = "green";
                this.reset(); // Reset form fields
            } catch (error) {
                console.error("Submission Error:", error);
                response.innerText = "Failed to submit. Try again.";
                response.style.color = "red";
            }
        } else {
            response.innerText = "Please fill out all fields.";
            response.style.color = "red";
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

