const possibleToChooseBtns = document.querySelectorAll('.game__img')
const playBtn = document.querySelector('.play-button')
const gameResult = document.querySelector('.game__result')
const retryBtn = document.querySelector('.retry-button')
const choose = document.querySelector('.game__title')

const computerPlay = () => {
  const possibleToChoose = ['Rock', 'Paper', 'Scissors']
  let index = possibleToChoose.length
  return possibleToChoose[Math.floor(Math.random() * index)]
}
// RULES
const gameRules = {
  Rock: 'Rock > Scissors',
  Scissors: 'Scissors > Paper',
  Paper: 'Paper > Rock'
}

let computerSelection = computerPlay()
let playerSelection = null



// PLAYING
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection 
    && gameResult.innerHTML.length === 0
    ) {
      let win = false
      gameRules[playerSelection] === `${playerSelection} > ${computerSelection}` ? win = true : playerSelection === computerSelection ? win = null : win = false 
      gameResult.innerHTML = win ? `You Win! ${playerSelection} beats ${computerSelection}` : win === null ? `Draw` : `You Lose! ${computerSelection} beats ${playerSelection}`
      retryBtn.style.display = 'block'
    }
  }
  // START PLAYING
  playBtn.addEventListener('click', () => {
    playRound(playerSelection, computerSelection)
  })
  // RESTART
  retryBtn.addEventListener('click', () => {
    choose.innerHTML = 'CLICK TO CHOOSE'
    gameResult.innerHTML = ''
    computerSelection = computerPlay()
  })
  // IMG addEventListener
  possibleToChooseBtns.forEach(img => {
    img.addEventListener('click', () => {
      playerSelection = img.id
      choose.innerHTML = playerSelection
    })
  })