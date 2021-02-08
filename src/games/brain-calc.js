import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (n1, n2, operator) => {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      throw new Error(`Expect to receive a math operator instead of '${operator}'`);
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(1, 20);
  const number2 = generateRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;
  const result = calculate(number1, number2, operator);
  const answer = String(result);

  return [question, answer];
};

export default () => runGame(gameDescription, generateRound);
