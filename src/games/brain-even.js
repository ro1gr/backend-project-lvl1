import launcher from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const printYesIfIsEven = (number) => {
  const isEven = (n) => n % 2 === 0;
  return isEven(number) ? 'yes' : 'no';
};

const generateQuestionAndAnswer = () => {
  const number = generateRandomNumber(0, 100);
  const answer = printYesIfIsEven(number);

  return [number, answer];
};

export default () => launcher(gameDescription, generateQuestionAndAnswer);
