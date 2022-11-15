const player1 = {
    score: 0,
    button1: document.querySelector('#p1Button1'),
    button2: document.querySelector('#p1Button2'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    score: 0,
    button1: document.querySelector('#p2Button1'),
    button2: document.querySelector('#p2Button2'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset')
let winningScore = 21;
let isGameOver = false;

function updateScores(player,opponent){
    if(player.score >= winningScore){
        isGameOver = true;
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        player.button1.disabled = true;
        player.button2.disabled = true;
        opponent.button1.disabled = true;
        opponent.button2.disabled = true;
    }
    player.display.textContent = player.score;
}

player1.button1.addEventListener('click', function (){
    if(!isGameOver){
        player1.score +=1;
    }
    updateScores(player1,player2);
})

player1.button2.addEventListener('click', function (){
    if(!isGameOver){
        player1.score +=2;
    }
    updateScores(player1,player2);
})

player2.button1.addEventListener('click', function (){
    if(!isGameOver){
        player2.score +=1;
    }
    updateScores(player2,player1);
})

player2.button2.addEventListener('click', function (){
    if(!isGameOver){
        player2.score +=2;
    }
    updateScores(player2,player1);
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    for(let p of [player1,player2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button1.disabled = false;
        p.button2.disabled = false;
    }
}