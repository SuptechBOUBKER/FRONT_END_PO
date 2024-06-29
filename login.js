async function register(event) {
    event.preventDefault();

    const name = document.getElementById('register-name').value;
    const number = document.getElementById('register-number').value;
    const order = document.getElementById('register-order').value;
    const food = document.getElementById('register-food').value;
    const musch = document.getElementById('register-musch').value;
    const dateTime = document.getElementById('register-dateTime').value;
    const address = document.getElementById('register-address').value;
    const message = document.getElementById('register-message').value;

    const consumer = {
        name: name,
        number: number,
        order: order,
        food: food,
        musch: musch,
        dateTime: dateTime,
        address: address,
        message: message
    };

    try {
        const response = await fetch('http://localhost:8080/POproject/resto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consumer)
        });

        if (response.ok) {
            alert('Enregistrement réussi!');
            // Vous pouvez ajouter ici des actions supplémentaires après l'enregistrement réussi, si nécessaire.
        } else {
            alert('Échec de l\'enregistrement!');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur de serveur!');
    }
}

async function login(event) {
    event.preventDefault();
    
    const name = document.getElementById('login-name').value;
    const number = document.getElementById('login-number').value;
  
    try {
      const response = await fetch('http://localhost:8080/POproject/resto');
      const consumers = await response.json();
  
      const user = consumers.find(consumer => consumer.name === name && consumer.number === number);
      
      if (user) {
        alert('Connexion réussie!'); // Message adapté pour la connexion réussie
        // Ajoutez ici des actions supplémentaires après la connexion réussie, si nécessaire.
      } else {
        alert('Nom d\'utilisateur ou numéro invalide');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de serveur!');
    }
}
