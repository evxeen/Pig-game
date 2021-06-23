const btnRoll = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');

const bones = document.querySelector('.dice');
console.log(bones);

let scoreResult = 0;

btnRoll.addEventListener('click',function() {
  const randNumber = Math.trunc(Math.random() * 6) + 1;
  
  bones.src = `dice-${randNumber}.png`;

  if (randNumber !== 1) {
    scoreResult += randNumber;
    current0El.textContent = scoreResult;
    console.log(scoreResult);
  } else {
      //добавить переключение на 2 ишгрока
  }
})
