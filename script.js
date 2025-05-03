// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Animation trigger functionality
    const triggerButton = document.querySelector('.trigger-animation');
    const animatedBox = document.querySelector('.animated-box');

    triggerButton.addEventListener('click', () => {
        animatedBox.classList.add('bounce');
        
        // Remove animation class after animation ends to allow re-triggering
        setTimeout(() => {
            animatedBox.classList.remove('bounce');
        }, 1000);
    });
});
