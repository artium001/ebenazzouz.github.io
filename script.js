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
