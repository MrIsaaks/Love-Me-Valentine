const noBtn = document.querySelector("#noBtn");
const yesBtn = document.querySelector("#yesBtn");
const questionContainer = document.querySelector("#questionContainer");
const heartLoader = document.querySelector("#heartLoader");
const resultContainer = document.querySelector(".question-container");
const gifResult = document.querySelector("#gifResult");
const questionText = document.querySelector("#questionText");

// Lógica para que el botón "No" se mueva [00:00:10]
noBtn.addEventListener("mouseover", () => {
    const newX = Math.floor(Math.random() * (questionContainer.offsetWidth));
    const newY = Math.floor(Math.random() * (questionContainer.offsetHeight));

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Lógica para el botón "Yes" [00:00:11]
yesBtn.addEventListener("click", () => {
    const timeoutId = setTimeout(() => {
        heartLoader.style.display = "none";
        // Aquí puedes cambiar la imagen y el texto final
        gifResult.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHVyM29rYm9wZGxuZjQwdTVhYXN5dXdwMndtYnFrdGpobGR1OGM5NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yOgsDxmKFiTpBkATwG/giphy.gif";
        questionText.innerText = "I love u so much <3, https://surl.lu/abxjuk" 
    }, 3000);

    heartLoader.style.display = "inherit";
    // Oculta los botones al aceptar
    document.querySelector(".buttons").style.display = "none";
});