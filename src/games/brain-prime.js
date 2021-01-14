import launcher from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const printYesIfIsPrime = (number) => {
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

  return isPrime(number) ? 'yes' : 'no';
};

const generateQuestionAndAnswer = () => {
  const number = generateRandomNumber(0, 100);
  const answer = printYesIfIsPrime(number);

  return [number, answer];
};

export default () => launcher(gameDescription, generateQuestionAndAnswer);
