#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

export const brainCalc = () => {
  const rules = 'What is the result of the expression?';
  const randomNumber = () => Math.ceil(Math.random() * 13);
  const operators = ['+', '-', '*'];

  let mistake = false;

  console.log(rules);

  for (let i = 0; i < 3 && mistake !== true; i += 1) {
    const number1 = randomNumber();
    const number2 = randomNumber();
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const question = `Question: ${number1} ${randomOperator} ${number2}`;
    const correctAnswer = (n1, n2, operator) => String(eval(`${n1} ${operator} ${n2}`));
    const isCorrect = (answer, n1, n2, operator) => answer === correctAnswer(n1, n2, operator);

    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (isCorrect(answer, number1, number2, randomOperator)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(number1, number2, randomOperator)}'.`);
      mistake = true;
    }
  }

  if (mistake) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

brainCalc();
