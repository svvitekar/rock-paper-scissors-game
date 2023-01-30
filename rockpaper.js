const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
  userChoice = e.target.id
  userChoiceDisplay.innerHTML=  userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
   const randomNumber = Math.floor(Math.random()*3)+1

  if (randomNumber===1){
    computerChoice = '👊'
  }
  if (randomNumber===2){
    computerChoice = '✋'
  }
  if (randomNumber===3){
    computerChoice = '✌'
  }
  computerChoiceDisplay.innerHTML= computerChoice
}

function  getResult(){
  if (computerChoice === userChoice) {
    result = 'its a draw!'
    resultDisplay.style.backgroundColor='skyblue'

  }
  if (computerChoice === '👊' && userChoice === "✋") {
    result = 'you win!'
    resultDisplay.style.backgroundColor='lightgreen'
  }
  if (computerChoice === '👊' && userChoice === "✌") {
    result = 'you lost!'
    resultDisplay.style.backgroundColor='orange'
  }
  if (computerChoice === '✋' && userChoice === "✌") {
    result = 'you win!'
    resultDisplay.style.backgroundColor='lightgreen'
  }
  if (computerChoice === '✋' && userChoice === "👊") {
    result = 'you lose!'
    resultDisplay.style.backgroundColor='orange'
  }
  if (computerChoice === '✌' && userChoice === "👊") {
    result = 'you win!'
    resultDisplay.style.backgroundColor='lightgreen'
  }
  if (computerChoice === '✌' && userChoice === "✋") {
    result = 'you lose!'
    resultDisplay.style.backgroundColor='orange'
  }
  resultDisplay.innerHTML = result
}
