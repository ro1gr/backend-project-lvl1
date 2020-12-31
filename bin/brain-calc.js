#!/usr/bin/env node
import brainCalc from '../games/brain-calc.js';
import launcher from '../index.js';
import randomNumber from '../src/random-number.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const number1 = () => randomNumber(1, 100);
const number2 = () => randomNumber(1, 100);
const randomOperator = () => operators[randomNumber(0, operators.length)];
const question = () => `${number1()} ${randomOperator()} ${number2()}`;

launcher(brainCalc, rules, question);
