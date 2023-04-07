const player = document.getElementById("player");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', function() {
    setTimeout(() => {
        player.style.animation = "animatie 1s ease infinite";
        player.src = "rock.png";
    }
    ,1000);
})

paper.addEventListener('click', function() {
    player.src = "paper.png";
})

scissors.addEventListener('click', function() {
    player.src = "scissors.png";
})