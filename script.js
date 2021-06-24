const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnRoll = document.querySelector('.btn--roll');

const dice = document.querySelector('.dice');

const scores = [0, 0];
let scoreResult = 0;
let activePlayer = 0;
 
btnRoll.addEventListener('click',function() {
  const randNumber = Math.trunc(Math.random() * 6) + 1;
  
  dice.src = `dice-${randNumber}.png`;
  if (randNumber !== 1) {
    scoreResult += randNumber;
    document.getElementById(`current--${activePlayer}`).textContent = scoreResult;
  } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      scoreResult = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
  }
})
