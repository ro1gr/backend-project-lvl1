import launcher from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (n1, n2) => {
  const greatest = n1 > n2 ? n1 : n2;
  const least = n1 > n2 ? n2 : n1;

  const inner = (big, small) => {
    if (big % small === 0) {
      return small;
    }
    return inner(small, big % small);
  };

  return inner(greatest, least);
};

const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(1, 20);
  const number2 = generateRandomNumber(1, 20);
  const question = `${number1} ${number2}`;
  const answer = findGcd(number1, number2);

  return [question, answer];
};

export default () => launcher(gameDescription, generateQuestionAndAnswer);
