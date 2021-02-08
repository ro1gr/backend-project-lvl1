import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runGame(gameDescription, generateRound);
