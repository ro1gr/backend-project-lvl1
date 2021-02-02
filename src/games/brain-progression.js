import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  const firstEl = generateRandomNumber(1, 20);
  const step = generateRandomNumber(1, 5);
  const len = generateRandomNumber(5, 10);
  const indexOfHiddenEl = generateRandomNumber(1, len);
  const progression = [firstEl];

  for (let i = 1; i < len; i += 1) {
    if (i === indexOfHiddenEl) {
      progression[i] = '..';
      i += 1;
      progression[i] = progression[i - 2] + step * 2;
    } else {
      progression[i] = progression[i - 1] + step;
    }
  }

  return progression;
};

const getHiddenEl = (progression) => {
  const len = progression.length;
  const firstEl = progression[0];
  const lastEl = progression[len - 1];
  const step = (lastEl - firstEl) / (len - 1);
  const indexOfHiddenEl = progression.indexOf('..');
  const hiddenEl = progression[indexOfHiddenEl - 1] + step;

  return hiddenEl;
};

const generateRound = () => {
  const progression = generateProgression();
  const question = progression.join(' ');
  const result = getHiddenEl(progression);
  const answer = String(result);

  return [question, answer];
};

export default () => runGame(gameDescription, generateRound);
