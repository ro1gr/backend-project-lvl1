import launcher from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'What number is missing in the progression?';
const randomProgression = () => {
  const arrLen = generateNumber(5, 10);
  const step = generateNumber(1, 10);
  const indexOfHiddenEl = generateNumber(1, arrLen - 1);
  const arr = [generateNumber(1, 20)];
  for (let i = 1; i < arrLen; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  arr[indexOfHiddenEl] = '..';
  return arr.join(' ');
};
const question = () => randomProgression();

const brainProgression = (str) => {
  const arr = str.split(' ');
  const isHidden = (element) => element === '..';
  const indexOfHiddenEl = arr.findIndex(isHidden);
  const step = (arr[indexOfHiddenEl + 1] - arr[indexOfHiddenEl - 1]) / 2;
  return String(Number(arr[indexOfHiddenEl - 1]) + step);
};

export default () => launcher(brainProgression, rules, question);
