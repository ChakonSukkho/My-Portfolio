const typewriterText = document.querySelector('.typewriter-text');
const words = [
    '  Frontend Developer',
    '  Database Manager', 
    '  Web Designer',
    '  Free Lancer',
    '  Software Analyst'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    if (!typewriterText) return;

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
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener('DOMContentLoaded', function () {
    if (typewriterText) {
        setTimeout(typeWriter, 2000);
    }
});

function openMenu() {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    const cancelBtn = document.querySelector('.cancel');
    
    dropdown.style.transform = 'translateY(0px)';
    hamburg.style.opacity = '0';
    cancelBtn.style.opacity = '1';
}

function closeMenu() {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    const cancelBtn = document.querySelector('.cancel');
    
    dropdown.style.transform = 'translateY(-500px)';
    hamburg.style.opacity = '1';
    cancelBtn.style.opacity = '0';
}
