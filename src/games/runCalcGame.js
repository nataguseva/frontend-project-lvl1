import { cons } from '@hexlet/pairs';
import generator from '../generator.js';
import game from '..';

const ruleOfGame = 'What is the result of the expression?';
const listOfOperators = '+-*';
const getOperator = () => listOfOperators[generator(10) % 3];
const getRightAnswer = (numb1, numb2, operator) => {
  let rightAnswer = 0;
  switch (operator) {
    case '+':
      rightAnswer = numb1 + numb2;
      break;
    case '-':
      rightAnswer = numb1 - numb2;
      break;
    case '*':
      rightAnswer = numb1 * numb2;
      break;
    default:
      break;
  } return rightAnswer;
};
const getGameSet = () => {
  const num1 = generator(100);
  const num2 = generator(10);
  const operator = getOperator();
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = getRightAnswer(num1, num2, operator).toString();
  const gameSet = cons(question, rightAnswer);
  return gameSet;
};
const runCalcGame = () => {
  game(ruleOfGame, getGameSet);
};
export default runCalcGame;
