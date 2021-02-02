import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;
const printYesIfIsEven = (n) => (isEven(n) ? 'yes' : 'no');

const generateRound = () => {
  const number = generateRandomNumber(0, 100);
  const question = String(number);
  const answer = printYesIfIsEven(number);

  return [question, answer];
};

export default () => runGame(gameDescription, generateRound);
