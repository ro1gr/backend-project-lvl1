import readlineSync from 'readline-sync';

export default (game, rules, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);
  let mistake = false;

  for (let i = 0; i < 3 && !mistake; i += 1) {
    const curQuestion = String(question());
    console.log(`Question: ${curQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(game(curQuestion));
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      mistake = true;
    }
  }

  if (!mistake) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
