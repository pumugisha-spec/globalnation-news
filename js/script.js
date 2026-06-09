// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    updateDarkModeIcon();
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isNowDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isNowDark);
    updateDarkModeIcon();
});

function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            newsletterForm.reset();
        }
    });
}

// Search Bar
const searchBar = document.querySelector('.search-bar button');
if (searchBar) {
    searchBar.addEventListener('click', () => {
        const searchInput = document.querySelector('.search-bar input').value;
        if (searchInput) {
            console.log('Searching for:', searchInput);
            alert(`Searching for: "${searchInput}"`);
        }
    });
}

// Read More Buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn, .read-more');
readMoreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Full article would load here');
    });
});

// Submit Buttons for Citizen Reporter
const submitButtons = document.querySelectorAll('.submit-btn');
submitButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const title = btn.closest('.reporter-card').querySelector('h3').textContent;
        alert(`${title} form would open here`);
    });
});

// Fact Check Links
const factCheckLinks = document.querySelectorAll('.factcheck-card a');
factCheckLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Full verification details would load here');
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Login Button
const loginBtn = document.querySelector('.login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        alert('Login page would open here');
    });
}

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
}

// Add active class to current navigation item
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href.includes(currentPage) || (currentPage === '' && href === '#home')) {
        link.style.color = 'var(--primary-color)';
        link.style.borderBottomColor = 'var(--primary-color)';
    }
});

// Testimonial or dynamic content loader
const dynamicContent = {
    'Hero Section': 'Global Leaders Meet to Discuss Future AI Regulations',
    'Top Story 1': 'New Trade Agreement Signed Between Nations',
    'Breaking News': '🔴 Major developments in international politics'
};

// Log page analytics
console.log('GlobalNation News Website Loaded Successfully');
console.log('Features Loaded:', Object.keys(dynamicContent));