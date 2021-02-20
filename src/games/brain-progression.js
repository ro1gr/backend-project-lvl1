import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'What number is missing in the progression?';

const generateQuestion = (firstElement, length, step, indexOfHiddenElement) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === indexOfHiddenElement) {
      progression[i] = '..';
    } else {
      progression[i] = firstElement + i * step;
    }
  }

  return progression.join(' ');
};

const generateRound = () => {
  const firstElement = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 5);
  const indexOfHiddenElement = generateRandomNumber(0, length - 1);

  const question = generateQuestion(firstElement, length, step, indexOfHiddenElement);
  const hiddenElement = firstElement + indexOfHiddenElement * step;
  const answer = String(hiddenElement);

  return [question, answer];
};

export default () => runGame(gameDescription, generateRound);
