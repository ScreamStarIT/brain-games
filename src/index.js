import readlineSync from 'readline-sync';
import greet from './cli.js';

const launchTheGame = (coreOfGame) => {
  const userName = greet();
  const { manual } = coreOfGame();
  console.log(manual);
  const winScore = 3;
  for (let i = 0; i !== winScore;) {
    const { task, rightAnswer } = coreOfGame();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default launchTheGame;
