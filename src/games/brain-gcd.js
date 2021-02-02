import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }
  if (n1 % n2 === 0) {
    return n2;
  }
  return findGcd(n2, n1 % n2);
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 20);
  const number2 = generateRandomNumber(0, 20);
  const question = `${number1} ${number2}`;
  const result = findGcd(number1, number2);
  const answer = String(result);

  return [question, answer];
};

export default () => runGame(gameDescription, generateRound);
