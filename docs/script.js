// Simple script if you want to add future actions
console.log("Welcome to pooja's Portfolio!");
// Optional: Log when user sees the contact section
document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.getElementById('contact');
    window.addEventListener('scroll', () => {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            console.log('User is viewing the Contact section');
        }
    });
});


.skill-progress {
    transition: width 1.5s ease-in-out;
}


.education-card:hover {
    background-color: #333;
    transform: scale(1.02);
    transition: 0.3s ease;
}
