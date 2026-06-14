import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false
    }
  }

  return true
}

const getRound = () => {
  const number = getRandomNumber()
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [number, correctAnswer]
}

const runPrimeGame = () => {
  runGame(description, getRound)
}

export default runPrimeGame
