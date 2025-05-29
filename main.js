// Typewriter effect
const typewriterText = document.querySelector('.typewriter-text');
const words = [
    'Frontend Developer',
    'Database Manager', 
    'Web Designer',
    'Free Lancer',
    'Software Analyst'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    // Check if element exists before proceeding
    if (!typewriterText) {
        console.error('Typewriter element not found');
        return;
    }
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriterText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        // Word is complete, start deleting after a pause
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Word is fully deleted, move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start the typewriter effect when page loads
// Wait a bit longer to ensure AOS animations don't interfere
document.addEventListener('DOMContentLoaded', function() {
    // Wait for AOS animations to settle
    setTimeout(typeWriter, 2000);
});

// Mobile menu functions (if you need them)
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    
    dropdown.style.transform = 'translateY(0px)';
    hamburg.style.opacity = '0';
    cancel.style.opacity = '1';
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    
    dropdown.style.transform = 'translateY(-500px)';
    hamburg.style.opacity = '1';
    cancel.style.opacity = '0';
}