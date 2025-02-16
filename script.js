document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Merci ${name} ! Votre message a été envoyé.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
function sendCommand(command) {
    const esp32Ip = "192.168.x.x"; // Remplacez par l'adresse IP de votre ESP32
    fetch(`http://${esp32Ip}/${command}`)
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => alert("Erreur : " + error));
}

document.getElementById('allumer-led').addEventListener('click', function() {
    sendCommand('ledon');
});

document.getElementById('eteindre-led').addEventListener('click', function() {
    sendCommand('ledoff');
});
