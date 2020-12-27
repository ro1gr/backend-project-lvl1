#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

export const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const randomNumber = () => Math.ceil(Math.random() * 13);

  let mistake = false;

  console.log(rules);

  for (let i = 0; i < 3 && mistake !== true; i += 1) {
    const number1 = randomNumber();
    const number2 = randomNumber();

    const question = `Question: ${number1} ${number2}`;
    const correctAnswer = (n1, n2) => {
      const biggest = n1 > n2 ? n1 : n2;
      const smallest = n1 < n2 ? n1 : n2;
      const innerFunc = (biggest, smallest) => {
        if (biggest % smallest === 0) {
          return smallest;
        }
        return innerFunc(biggest, biggest % smallest);
      };
      return String(innerFunc(biggest, smallest));
    };

    const isCorrect = (answer, n1, n2) => answer === correctAnswer(n1, n2);

    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (isCorrect(answer, number1, number2)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(number1, number2)}'.`);
      mistake = true;
    }
  }

  if (mistake) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

brainGcd();
