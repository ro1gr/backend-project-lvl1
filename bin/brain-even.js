#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from './greetings.js';

export const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = () => Math.ceil(Math.random() * 13);

  const isEven = (number) => number % 2 === 0;
  const correctAnswer = (number) => isEven(number) ? 'yes' : 'no';
  const isCorrect = (answer, number) => answer === correctAnswer(number);
  let mistake = false;

  console.log(rules);

  for (let i = 0; i < 3 && mistake !== true; i += 1) {
    const number = randomNumber();
    const question = `Question: ${number}`;

    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (isCorrect(answer, number)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(number)}'.`);
      mistake = true;
    }
  }

  if (mistake) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

brainEven();