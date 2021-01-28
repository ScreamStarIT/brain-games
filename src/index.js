import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const gameEngine = (manual, coreOfGame) => {
  console.log(manual);
  const winScore = 3;
  for (let i = 0; i !== winScore;) {
    const { task, rightAnswer } = coreOfGame();
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
