import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'What number is missing in the progression?';

const generateQuestion = (firstEl, length, step, indexOfHiddenEl) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === indexOfHiddenEl) {
      progression[i] = '..';
    } else {
      progression[i] = firstEl + i * step;
    }
  }

  return progression.join(' ');
};

const generateRound = () => {
  const firstEl = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 5);
  const indexOfHiddenEl = generateRandomNumber(0, length - 1);

  const question = generateQuestion(firstEl, length, step, indexOfHiddenEl);
  const hiddenEl = firstEl + indexOfHiddenEl * step;
  const answer = String(hiddenEl);

  return [question, answer];
};

export default () => runGame(gameDescription, generateRound);
