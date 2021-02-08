import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(0, 100);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runGame(gameDescription, generateRound);
