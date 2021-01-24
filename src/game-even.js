import _ from 'lodash';
import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const isEven = (num) => {
  let result = 'no';
  if (num % 2 === 0) {
    result = 'yes';
  }
  return result;
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const winScore = 3;
  for (let i = 0; i < winScore;) {
    const number = _.random(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(number) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(number)}".`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
