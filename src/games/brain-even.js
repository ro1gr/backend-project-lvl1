import launcher from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = () => generateNumber(0, 100);

const isEven = (number) => number % 2 === 0;
const brainEven = (number) => (isEven(number) ? 'yes' : 'no');

export default () => launcher(brainEven, rules, question);
