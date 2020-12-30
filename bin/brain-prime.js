#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import randomNumber from '../src/random-number.js';

export const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  let mistake = false;

  console.log(rules);

  for (let i = 0; i < 3 && mistake !== true; i += 1) {
    const number = randomNumber(0, 100);

    const question = `Question: ${number}`;
    const correctAnswer = (n) => {
      for (let i = 2; i < n / 2; i += 1) {
        if (n % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    const isCorrect = (anwer, n) => answer === correctAnswer(n);

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

brainPrime();
