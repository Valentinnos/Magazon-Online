document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Aplică tema curentă
    document.body.classList.add(currentTheme + '-theme');
    themeToggleButton.textContent = currentTheme === 'dark' ? '🌞' : '🌙';

    // Schimbă tema
    themeToggleButton.addEventListener('click', function () {
        let newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(newTheme + '-theme');
        themeToggleButton.textContent = newTheme === 'dark' ? '🌞' : '🌙';

        // Salvează preferința utilizatorului
        localStorage.setItem('theme', newTheme);
    });

    // Funcționalitate pentru adăugarea produselor în coș
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');
            alert(`Produsul "${productName}" cu prețul de ${productPrice} RON a fost adăugat în coș.`);
        });
    });

    // Validarea formularului de contact
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne trimiterea efectivă a formularului pentru demonstrație

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Mesajul tău a fost trimis cu succes! Mulțumim!');
            contactForm.reset(); // Resetează formularul
        } else {
            alert('Te rugăm să completezi toate câmpurile.');
        }
    });
});