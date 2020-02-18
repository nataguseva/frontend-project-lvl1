import { cons } from '@hexlet/pairs';
import getRandomNumber from '../randomNumber.js';
import runGame from '..';

const ruleOfGame = 'Find the greatest common divisor of given numbers!';
const getGCD = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  } return getGCD(num2, num1 % num2);
};
const getGameSet = () => {
  const num1 = getRandomNumber(1, 1000);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGCD(num1, num2).toString();
  const gameSet = cons(question, rightAnswer);
  return gameSet;
};

const runGcdGame = () => {
  runGame(ruleOfGame, getGameSet);
};
export default runGcdGame;
