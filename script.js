// Common JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Form handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    });

    // Booking buttons
    const bookButtons = document.querySelectorAll('.btn, button');
    bookButtons.forEach(button => {
        if (button.textContent.includes('Book') || button.textContent.includes('Reserve')) {
            button.addEventListener('click', function() {
                alert('Booking feature will be implemented soon!');
            });
        }
    });

    // Image error handling
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
            this.alt = 'Image not available';
        });
    });
});