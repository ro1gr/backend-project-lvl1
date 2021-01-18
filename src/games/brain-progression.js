import launcher from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameDescription = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 10);
  const progression = [generateRandomNumber(1, 20)];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  const indexOfHiddenEl = generateRandomNumber(1, progressionLength);
  const hiddenEl = progression[indexOfHiddenEl];
  progression[indexOfHiddenEl] = '..';

  const question = progression.join(' ');
  const answer = String(hiddenEl);

  return [question, answer];
};

export default () => launcher(gameDescription, generateQuestionAndAnswer);
