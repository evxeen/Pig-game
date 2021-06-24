const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const dice = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold'); 
const btnNew = document.querySelector('.btn--new');

let scores, scoreResult, activePlayer, playing;  
 
const init = function() {
  scores = [0, 0];
  scoreResult = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  dice.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();


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
  
    if (scores[activePlayer] >= 100) { 
      dice.classList.add('hidden'); 
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
})

btnNew.addEventListener('click', init);

