import launcher from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const question = () => generateNumber(1, 100);

const brainPrime = (number) => {
  const isPrime = (n) => {
    if (n === 0 || n === 1) {
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

export default () => launcher(brainPrime, rules, question);
