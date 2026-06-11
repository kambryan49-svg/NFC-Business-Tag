// Get modal elements
const whatsappModal = document.getElementById('whatsappModal');
const phoneModal = document.getElementById('phoneModal');
const loopModal = document.getElementById('loopModal');

// Get button elements
const whatsappBtn = document.getElementById('whatsappBtn');
const phoneBtn = document.getElementById('phoneBtn');
const loopBtn = document.getElementById('loopBtn');

// Get close buttons
const closeButtons = document.querySelectorAll('.close');

// WhatsApp Modal
whatsappBtn.addEventListener('click', () => {
    whatsappModal.style.display = 'block';
});

// Phone Modal
phoneBtn.addEventListener('click', () => {
    phoneModal.style.display = 'block';
});

// Loop Modal
loopBtn.addEventListener('click', () => {
    loopModal.style.display = 'block';
});

// Close Modals
closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Download vCard
const downloadVcardBtn = document.getElementById('downloadVcardBtn');
if (downloadVcardBtn) {
    downloadVcardBtn.addEventListener('click', () => {
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;
        const email = document.getElementById('contactEmail').value;

        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
END:VCARD`;

        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(vcard));
        element.setAttribute('download', 'contact.vcf');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        alert('Contact downloaded as vCard!');
    });
}

// Loop button animation
loopBtn.addEventListener('click', function() {
    this.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        this.style.transform = 'rotate(0deg)';
    }, 600);
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Keyboard shortcut to close modal (ESC key)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

// Dynamic greeting based on time
window.addEventListener('load', () => {
    const hour = new Date().getHours();
    let greeting = 'Welcome';
    
    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    
    // You can use this greeting if needed
    console.log(greeting);
});