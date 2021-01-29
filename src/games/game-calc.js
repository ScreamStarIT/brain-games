import _ from 'lodash';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const result = operators[_.random(2)];
  return result;
};

const getCoreOfGame = () => {
  const manual = 'What is the result of the expression?';
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);
  const oper = getRandomOperator();
  const task = `${number1} ${oper} ${number2}`;
  const calc = (operator, num1, num2) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  const rightAnswer = calc(oper, number1, number2);
  return { manual, task, rightAnswer };
};

export default getCoreOfGame;
