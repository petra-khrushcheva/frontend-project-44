import runGame from '../index.js'

const description = 'What is the result of the expression?'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)

  return operators[randomIndex]
}

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const getRound = () => {
  const number1 = getRandomNumber()
  const number2 = getRandomNumber()
  const operator = getRandomOperator()

  const question = `${number1} ${operator} ${number2}`
  const correctAnswer = String(calculate(number1, number2, operator))

  return [question, correctAnswer]
}

const runCalcGame = () => {
  runGame(description, getRound)
}

export default runCalcGame
