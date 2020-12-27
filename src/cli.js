import readlineSync from 'readline-sync';

export const welcome = console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
export const sayHello = console.log(`Hello, ${name}!`);
