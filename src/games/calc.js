import runGame from './general_logic_game.js'

const operators = ['+', '-', '*']

const calculate = (expression) => {

  const parts = expression.split(' ')
  const a = parseInt(parts[0])
  const operator = parts[1]
  const b = parseInt(parts[2])

  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      return 0
  }
}
const getRound= () => {
  const a = Math.floor(Math.random() * 101)
  const b = Math.floor(Math.random() * 101)
  const operator = operators[Math.floor(Math.random() * operators.length)]
  const question = `${a} ${operator} ${b}`
  const correctAnswer = String (calculate(question))
  return {question, correctAnswer}
}



const playCalcGame = () => {
  const description = 'What is the result of the expression?'
  runGame(description, getRound)
}

export default playCalcGame