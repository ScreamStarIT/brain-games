import _ from 'lodash';

const getCoreOfGame = () => {
  const manual = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const task = _.random(1, 1373);
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const rightAnswer = isPrime(task);
  return { manual, task, rightAnswer };
};

export default getCoreOfGame;
