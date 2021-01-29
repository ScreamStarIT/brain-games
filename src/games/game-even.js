import _ from 'lodash';

const getCoreOfGame = () => {
  const manual = 'Answer "yes" if the number is even, otherwise answer "no".';
  const task = _.random(1, 100);
  const rightAnswer = task % 2 === 0 ? 'yes' : 'no';
  return { manual, task, rightAnswer };
};

export default getCoreOfGame;
