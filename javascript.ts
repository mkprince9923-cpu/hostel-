// Button click interaction
document.getElementById('clickMe').addEventListener('click', function() {
    document.getElementById('message').textContent = "You clicked the button! 🎉";
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('formMessage').textContent = 
        `Thank you, ${name}! We will contact you at ${email}.`;
    
    // Reset form
    this.reset();
});
