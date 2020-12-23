import readlineSync from 'readline-sync';
import brainEven from '../bin/brain-even.js';

export const greeting = console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
export const sayHello = console.log(`Hello, ${name}!`);

brainEven();
