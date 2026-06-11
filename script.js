// Get modal elements
const whatsappModal = document.getElementById('whatsappModal');
const phoneModal = document.getElementById('phoneModal');

// Get button elements
const whatsappBtn = document.getElementById('whatsappBtn');
const phoneBtn = document.getElementById('phoneBtn');

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

// Download vCard (Name & Number only)
const downloadVcardBtn = document.getElementById('downloadVcardBtn');
if (downloadVcardBtn) {
    downloadVcardBtn.addEventListener('click', () => {
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;

        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
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
    
    console.log(greeting);
});
