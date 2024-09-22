function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Smooth scrolling and section display
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Get target section ID
        const targetId = this.getAttribute('href');
        
        // Show the target section
        const targetSection = document.querySelector(targetId);
        targetSection.style.display = 'block';

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize by showing the first section (optional)
document.querySelector('section').style.display = 'block'; // Show the first section on load

// Typewriter effect
var typed = new Typed(".typewriter-text", {
    strings: ["Web DEVELOPER", "DESIGNER", "Astronomy Lover", "Nature Lover"],
    typeSpeed: 60,
    backSpeed: 20,
    loop: true
});



document.querySelectorAll('nav .links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");
    
    progressBars.forEach(bar => {
        const value = bar.getAttribute("aria-valuenow");
        bar.style.width = value + "%"; // Set the width based on the value
    });
});


