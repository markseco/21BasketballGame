const p1Button1 = document.querySelector('#p1Button1')
const p1Button2 = document.querySelector('#p1Button2')
const p2Button1 = document.querySelector('#p2Button1')
const p2Button2 = document.querySelector('#p2Button2')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')

let p1Score = 0;
let p2Score = 0;
let winningScore = 21;
let isGameOver = false;

p1Button1.addEventListener('click', function (){
    if(!isGameOver){
        p1Score +=1;
    }
    if(p1Score >= winningScore){
        isGameOver = true;
        p1Display.classList.add('has-text-success')
        p2Display.classList.add('has-text-danger')
        p1Button1.disabled = true;
        p1Button2.disabled = true;
        p2Button1.disabled = true;
        p2Button2.disabled = true;
    }
    p1Display.textContent = p1Score;
})

p1Button2.addEventListener('click', function (){
    if(!isGameOver){
        p1Score +=2;
    }
    if(p1Score >= winningScore){
        isGameOver = true;
        p1Display.classList.add('has-text-success')
        p2Display.classList.add('has-text-danger')
        p1Button1.disabled = true;
        p1Button2.disabled = true;
        p2Button1.disabled = true;
        p2Button2.disabled = true;
    }
    p1Display.textContent = p1Score;
})

p2Button1.addEventListener('click', function (){
    if(!isGameOver){
        p2Score +=1;
    }
    if(p2Score >= winningScore){
        isGameOver = true;
        p2Display.classList.add('has-text-success')
        p1Display.classList.add('has-text-danger')
        p1Button1.disabled = true;
        p1Button2.disabled = true;
        p2Button1.disabled = true;
        p2Button2.disabled = true;
    }
    p2Display.textContent = p2Score;
})

p2Button2.addEventListener('click', function (){
    if(!isGameOver){
        p2Score +=2;
    }
    if(p2Score >= winningScore){
        isGameOver = true;
        p2Display.classList.add('has-text-success')
        p1Display.classList.add('has-text-danger')
        p1Button1.disabled = true;
        p1Button2.disabled = true;
        p2Button1.disabled = true;
        p2Button2.disabled = true;
    }
    p2Display.textContent = p2Score;
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button1.disabled = false;
    p1Button2.disabled = false;
    p2Button1.disabled = false;
    p2Button2.disabled = false;

}