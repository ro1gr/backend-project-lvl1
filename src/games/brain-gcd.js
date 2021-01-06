import launcher from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'Find the greatest common divisor of given numbers.';
const number1 = () => generateNumber(1, 100);
const number2 = () => generateNumber(1, 100);
const question = () => `${number1()} ${number2()}`;

const brainGcd = (curQuestion) => {
  const arr = curQuestion.split(' ');
  const n1 = arr[0];
  const n2 = arr[1];
  const greatest = n1 > n2 ? n1 : n2;
  const least = n1 > n2 ? n2 : n1;

  const getGcd = (big, small) => {
    if (big % small === 0) {
      return small;
    }
    return getGcd(small, big % small);
  };

  return getGcd(greatest, least);
};

export default () => launcher(brainGcd, rules, question);
