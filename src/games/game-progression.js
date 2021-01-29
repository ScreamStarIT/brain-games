import _ from 'lodash';

const getCoreOfGame = () => {
  const manual = 'What number is missing in the progression?';
  const lengthOfProgression = 10;
  const beginOfProgression = _.random(1, 100);
  const stepOfProgression = _.random(1, 100);
  const progression = [beginOfProgression];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    progression[i] = progression[i - 1] + stepOfProgression;
  }
  const hiddenNumber = _.random(9);
  const rightAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const task = progression.join(' ');
  return { manual, task, rightAnswer };
};

export default getCoreOfGame;
