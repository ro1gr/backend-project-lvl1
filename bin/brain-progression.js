#!/usr/bin/env node
import brainProgression from '../games/brain-progression.js';
import launcher from '../index.js';
import randomNumber from '../src/random-number.js';

const rules = 'What number is missing in the progression?';
const randomProgression = () => {
  const arrLen = randomNumber(5, 10);
  const step = randomNumber(1, 10);
  const indexOfHiddenEl = randomNumber(1, arrLen);
  const arr = [randomNumber(1, 20)];
  for (let i = 1; i < arrLen; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  arr[indexOfHiddenEl] = '..';
  return arr.join(' ');
};
const question = () => randomProgression();

launcher(brainProgression, rules, question);
