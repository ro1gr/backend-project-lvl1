import launcher from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (n1, n2, operator) => {
  switch (operator) {
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return n1 + n2;
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(1, 20);
  const number2 = generateRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomNumber(0, operators.length)];

  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator);

  return [question, answer];
};

export default () => launcher(gameDescription, generateQuestionAndAnswer);
