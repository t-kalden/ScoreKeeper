// Git Commit Testing


const p1 = {
    score : 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score : 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector("#reset");
const winCondition = document.querySelector('#winCondition');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score++;
        if(player.score === winningScore) {
            isGameOver = true;

            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
        isGameOver = false;
    }
}

p1.button.addEventListener('click', function(){
    updateScores(p1,p2);
});
p2.button.addEventListener('click', function() {
    updateScores(p2,p1);
})
   

resetButton.addEventListener('click', reset);

winCondition.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

function reset(){
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');

}