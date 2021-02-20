import readlineSync from 'readline-sync';

const maxRoundsCount = 3;
export default (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  let round = 0;
  while (round < maxRounds) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    round += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
