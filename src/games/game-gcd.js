import _ from 'lodash';

const getCoreOfGame = () => {
  const manual = 'Find the greatest common divisor of given numbers.';
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);
  const task = `${number1} ${number2}`;
  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const rightAnswer = gcd(number1, number2);
  return { manual, task, rightAnswer };
};

export default getCoreOfGame;
