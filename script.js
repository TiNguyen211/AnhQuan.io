const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    updateIcon(savedTheme);
}

function updateLeetCodeTheme() {
    const leetcodeImg = document.getElementById('leetcode-stats-card');
    if (leetcodeImg) {
        const isDark = body.classList.contains('dark-mode');
        const theme = isDark ? 'dark' : 'light';
        const currentSrc = leetcodeImg.src;
        const newSrc = currentSrc.replace(/theme=(light|dark)/, `theme=${theme}`);
        if (currentSrc !== newSrc) {
            leetcodeImg.src = newSrc;
        }
    }
}

updateLeetCodeTheme();

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateIcon('dark-mode');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateIcon('light-mode');
    }
    updateLeetCodeTheme();
});

function updateIcon(theme) {
    if (theme === 'dark-mode') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const menuIcon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form logic removed as form was removed from HTML

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(current)) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = '';
        }
    });
});
