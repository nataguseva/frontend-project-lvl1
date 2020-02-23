import { cons } from '@hexlet/pairs';
import getRandomNumber from '../randomNumber.js';
import runGame from '..';

const ruleOfGame = 'What is the result of the expression?';
const operators = '+-*';
const getOperator = () => operators[getRandomNumber(0, operators.length - 1)];
const getResultOfCalc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};
const getGameSet = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 10);
  const operator = getOperator();
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = getResultOfCalc(num1, num2, operator);
  return cons(question, rightAnswer.toString());
};
const runCalcGame = () => {
  runGame(ruleOfGame, getGameSet);
};
export default runCalcGame;
