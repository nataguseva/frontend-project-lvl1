import { cons } from '@hexlet/pairs';
import generator from '../generator.js';
import game from '..';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getGameSet = () => {
  const question = generator(100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const runEvenGame = () => {
  game(ruleOfGame, getGameSet);
};
export default runEvenGame;
