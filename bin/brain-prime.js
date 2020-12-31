#!/usr/bin/env node
import brainPrime from '../games/brain-prime.js';
import launcher from '../index.js';
import randomNumber from '../src/random-number.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const question = () => randomNumber(0, 100);

launcher(brainPrime, rules, question);
