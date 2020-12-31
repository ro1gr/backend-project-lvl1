#!/usr/bin/env node
import brainEven from '../games/brain-even.js';
import launcher from '../index.js';
import randomNumber from '../src/random-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = () => randomNumber(0, 100);

launcher(brainEven, rules, question);
