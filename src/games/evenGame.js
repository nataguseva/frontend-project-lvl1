import { cons } from '@hexlet/pairs';
import getRandomNumber from '../randomNumber.js';
import runGame from '..';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getGameSet = () => {
  const question = getRandomNumber(1, 1000);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const runEvenGame = () => {
  runGame(ruleOfGame, getGameSet);
};
export default runEvenGame;
