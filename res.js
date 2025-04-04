document.addEventListener('DOMContentLoaded', function() {
    // Navbar active link highlighting
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navbarLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Simple smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic form submission handling (you'll need server-side for actual submission)
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Basic form validation (add more robust validation as needed)
            const fullName = document.querySelector('input[placeholder="fullName"]').value;
            const email = document.querySelector('input[placeholder="email"]').value;
            const message = document.querySelector('textarea[placeholder="your massage"]').value;

            if (!fullName || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate form submission (replace with actual AJAX/fetch request)
            alert('Form submitted successfully! (Simulated)');
            contactForm.reset(); // Clear the form
        });
    }

    // Example: Add a class to the header on scroll (for a sticky effect)
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // Adjust scroll threshold as needed
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Add class to the contact button on hover.
    const contactButton = document.querySelector('.contact')

    if(contactButton) {
      contactButton.addEventListener('mouseover', ()=>{
        contactButton.classList.add('hovered');
      })
      contactButton.addEventListener('mouseleave',()=>{
        contactButton.classList.remove('hovered');
      })
    }
});