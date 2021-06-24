const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold'); 

const dice = document.querySelector('.dice');
dice.classList.add('hidden')

const scores = [0, 0];
let scoreResult = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  scoreResult = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
 
btnRoll.addEventListener('click',function() {
  if(playing) {
    const randNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randNumber}.png`;
  
    if (randNumber !== 1) {
      dice.classList.remove('hidden');
      scoreResult += randNumber;
      document.getElementById(`current--${activePlayer}`).textContent = scoreResult;
    } else {
        switchPlayer();
    }
  }
})

btnHold.addEventListener('click', function() {
  if(playing) {
    scores[activePlayer] += scoreResult;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    if (scores[activePlayer] >= 10) { 
      dice.classList.add('hidden'); 
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer()
    }
  }
})