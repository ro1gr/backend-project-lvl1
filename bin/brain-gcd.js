#!/usr/bin/env node
import brainGcd from '../games/brain-gcd.js';
import launcher from '../index.js';
import randomNumber from '../src/random-number.js';

const rules = 'Find the greatest common divisor of given numbers.';
const number1 = () => randomNumber(1, 100);
const number2 = () => randomNumber(1, 100);
const question = () => `${number1()} ${number2()}`;

launcher(brainGcd, rules, question);
