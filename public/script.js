window.addEventListener("load", () => {
    fetch("/reset", { method: "POST" })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); 
        })
        .catch(error => console.error("Error resetting the game:", error));
});

const successSound = new Audio('sounds/success.wav');
const congratsSound = new Audio('sounds/congrats.wav');
const failSound = new Audio('sounds/fail.wav');
const tickingSound = new Audio("sounds/10Seconds.flac");
const lastMinuteSound = new Audio("sounds/lastMinute.wav");
const gameOverSound = new Audio('sounds/gameOver.wav');
const explosionSound = new Audio('sounds/explosion.wav');

let timeLeft = 50 * 60;
const totalTime = timeLeft;
const timerDisplay = document.getElementById("timer");
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            if (timeLeft <= 60){
                lastMinuteSound.play();
            }
            if (timeLeft <= 10){
                tickingSound.play();
            }
            timeLeft--;
            timerDisplay.textContent = `Time left: ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`;
        } else {
            lastMinuteSound.pause();
            tickingSound.pause(); 

            lastMinuteSound.currentTime = 0;
            tickingSound.currentTime = 0; //reset sound

            clearInterval(timerInterval);

            explosionSound.play();
            document.body.classList.add("explosion");
            gameOverSound.play();
            document.getElementById("game-buttons").style.display = "none";
            document.getElementById("restart").style.display = "block";
        }
    }, 1000); 
}

document.getElementById("submit").addEventListener("click", () => {
    const inputs = document.querySelectorAll(".digit");
    const code = Array.from(inputs).map(input => input.value).join("");

    if (timeLeft > 0) {
        fetch("/disarm-code", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ code })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.body.style.backgroundColor = "lightgreen";
                successSound.play();
                console.log("Code disarmed successfully!");
            } else if (data.status === 'fail') {
                document.body.style.backgroundColor = "lightcoral";
                failSound.play();
                console.log("Incorrect code. Try again.");

                timeLeft -= 60;
                timerDisplay.textContent = `Time left: ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`;

                inputs.forEach(input => input.classList.add("shake"));
                setTimeout(() => inputs.forEach(input => input.classList.remove("shake")), 300);
            } else if (data.status === 'finished') {
                tickingSound.pause(); 
                tickingSound.currentTime = 0; //reset sound
                clearInterval(timerInterval);
                document.body.style.backgroundColor = "lightblue";
                congratsSound.play();
                console.log("Game finished! Bomb disarmed!");
                confetti({
                    particleCount: 200,
                    spread: 200,
                    origin: { x: 0.5, y: 0.5 } 
                });
                document.getElementById("game-buttons").style.display = "none";
                document.getElementById("restart").style.display = "block";
            }
        })
        .catch(error => console.error("Error:", error));
    }else{
        gameOverSound.play();
    }
});

document.getElementById("clear").addEventListener("click", () => {
    const inputs = document.querySelectorAll(".digit");
    inputs.forEach(input => input.value = "");
    document.body.style.backgroundColor = ""; 
});

document.getElementById("start").addEventListener("click", () => {
    startTimer();

    document.getElementById("start").style.display = "none";
    document.getElementById("game-buttons").style.display = "block";
});

document.getElementById("restart").addEventListener("click", () => {
    location.reload();
});