// ====== Mobile Menu Toggle ======
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ====== Smooth Scroll for Navigation Links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// ====== Booking Form Handling ======
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[placeholder="Your Full Name"]').value;
    const phone = this.querySelector('input[placeholder="Phone Number"]').value;
    const email = this.querySelector('input[placeholder="Email Address"]').value;
    const service = this.querySelector('select').value;
    const date = this.querySelector('input[type="date"]').value;

    // Simple validation
    if (!name || !phone || !service || !date) {
        alert('⚠️ Please fill in all required fields!');
        return;
    }

    // Success message
    alert(`✅ Thank you, ${name}!\n\nYour appointment request has been received:\n📅 Date: ${date}\n💇 Service: ${service}\n\nWe will contact you shortly at ${phone} to confirm your booking.\n\nSee you at Texas Glow! ✨`);
    
    // Reset form
    this.reset();
});

// ====== Navbar Background on Scroll ======
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(157, 78, 221, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// ====== Set Minimum Date for Booking to Today ======
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// ====== Optional: Animation on Scroll ======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to cards
document.querySelectorAll('.card, .card-gradient').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});