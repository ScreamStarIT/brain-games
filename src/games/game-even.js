import _ from 'lodash';

export const manual = 'Answer "yes" if the number is even, otherwise answer "no".';

export const coreOfGame = () => {
  const task = _.random(1, 100);
  const rightAnswer = task % 2 === 0 ? 'yes' : 'no';
  return { task, rightAnswer };
};
