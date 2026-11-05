const randomNumber = Math.floor(Math.random() * 100);

console.log("Número secreto gerado:", randomNumber);

function checkGuess() {
    const inputElement = document.getElementById("user-guess");
    const messageElement = document.getElementById("message");
    const containerElement = document.getElementById("game-container");

    const userGuess = parseInt(inputElement.value);

    if (isNaN(userGuess)) {
        messageElement.innerText = "Por favor, digite um número válido!";
        return;
    }

    if (userGuess === randomNumber) {
        messageElement.innerText = " Parabéns! Você acertou!";
        containerElement.style.setProperty("background-color", "#bbf7d0");
        containerElement.style.setProperty("color", "#166534");
    }
    else if (userGuess > randomNumber) {
        messageElement.innerText = "Errado! O número secreto é MENOR.";
        containerElement.style.setProperty("background-color", "red");
        containerElement.style.setProperty("color", "white");
    }
    else {
        messageElement.innerText = "Errado! O número secreto é MAIOR.";
        containerElement.style.setProperty("background-color", "red");
        containerElement.style.setProperty("color", "white");
    }
}