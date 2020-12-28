#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

export const brainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const progression = () => {
    const arrLen = random(5, 10);
    const step = random(1, 10);
    const indexOfHiddenEl = random(1, arrLen - 1);
    const arr = [random(1, 20)];
    for (let i = 1; i < arrLen; i += 1) {
        arr[i] = arr[i - 1] + step;
    }
    arr[indexOfHiddenEl] = '..';
    return arr.join(' ');
  }

  let mistake = false;

  console.log(rules);

  for (let i = 0; i < 3 && mistake !== true; i += 1) {
    const arr = progression();

    const question = `Question: ${arr}`;
    const correctAnswer = (str) => {
      const arr = str.split(' ');
      const isHidden = (element) => element === '..';
      const indexOfHiddenEl = arr.findIndex(isHidden);
      const step = (arr[indexOfHiddenEl + 1] - arr[indexOfHiddenEl - 1]) / 2;
      return String(Number(arr[indexOfHiddenEl - 1]) + step);
    };

    const isCorrect = (answer, arr) => answer === correctAnswer(arr);

    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (isCorrect(answer, arr)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(arr)}'.`);
      mistake = true;
    }
  }

  if (mistake) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

brainProgression();
