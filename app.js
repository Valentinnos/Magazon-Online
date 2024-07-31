document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    // Funcția pentru a adăuga produse în coș
    function addToCart(name, price) {
        const item = {
            name: name,
            price: parseFloat(price)
        };
        cart.push(item);
        console.log('Produs adăugat în coș:', item);
        alert(`Produsul "${name}" a fost adăugat în coș.`);
    }

    // Event listener pentru butoanele "Adaugă în coș"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const name = event.target.getAttribute('data-name');
            const price = event.target.getAttribute('data-price');
            addToCart(name, price);
        });
    });

    // Funcția pentru a trimite formularul de contact
    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aici poți adăuga cod pentru a trimite emailul sau a salva datele
        console.log(`Mesaj trimis de ${name} (${email}): ${message}`);
        alert('Mesajul tău a fost trimis!');
        document.getElementById('contact-form').reset();
    });
});