import launcher from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'What is the result of the expression?';
const number1 = () => generateNumber(1, 100);
const number2 = () => generateNumber(1, 100);
const operators = ['+', '-', '*'];
const randomOperator = () => operators[generateNumber(0, operators.length)];
const question = () => `${number1()} ${randomOperator()} ${number2()}`;

const brainCalc = (operation) => {
  const arr = operation.split(' ');
  const n1 = Number(arr[0]);
  const n2 = Number(arr[2]);
  const operator = arr[1];

  let expression = n1;
  switch (operator) {
    case '+':
      expression = n1 + n2;
      break;
    case '-':
      expression = n1 - n2;
      break;
    default:
      expression = n1 * n2;
  }

  return expression;
};

export default () => launcher(brainCalc, rules, question);
