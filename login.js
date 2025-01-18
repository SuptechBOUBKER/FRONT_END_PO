async function register(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    var name = document.getElementById('register-name').value;
    var number = document.getElementById('register-number').value;
    var order = document.getElementById('register-order').value;
    var food = document.getElementById('register-food').value;
    var musch = document.getElementById('register-musch').value;
    var dateTime = document.getElementById('register-dateTime').value;
    var address = document.getElementById('register-address').value;
    var message = document.getElementById('register-message').value;

    // Create an object with the captured data
    var data = {
        name: name,
        numbers: number,
        orderS: order,
        food: food,
        musch: musch,
        dateTimes: dateTime,
        address: address,
        message: message
    };

    try {
        const response = await fetch('http://localhost:8080/POproject/restos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Commande réussi!');
            window.location.href = 'index.html';
            // Vous pouvez ajouter ici des actions supplémentaires après l'enregistrement réussi, si nécessaire.
        } else {
            alert('Échec de l\'enregistrement!');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur de serveur!');
    }
}
