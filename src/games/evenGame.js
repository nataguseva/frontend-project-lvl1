import { cons } from '@hexlet/pairs';
import generator from '../generator.js';
import game from './index.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameSet = () => {
  const num = generator();
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return cons(num, rightAnswer);
};
const evenGame = () => {
  game(ruleOfGame, getGameSet);
};
export default evenGame;
