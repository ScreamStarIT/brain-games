import _ from 'lodash';

export const manual = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const coreOfGame = () => {
  const task = _.random(1, 1511);
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const rightAnswer = isPrime(task);
  return { task, rightAnswer };
};
