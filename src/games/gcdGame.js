import { cons } from '@hexlet/pairs';
import generator from '../generator.js';
import game from './index.js';

const ruleOfGame = 'Find the greatest common divisor of given numbers!';
const getGameSet = () => {
  let request = '';
  const num1 = generator();
  const num2 = generator() % 100;
  request = `${num1} ${num2}`;
  const getRightAnswer = (numb1, numb2) => {
    if (numb1 % numb2 === 0) {
      return numb2;
    } return getRightAnswer(numb2, numb1 % numb2);
  };
  const rightAnswer = getRightAnswer(num1, num2).toString();
  const gameSet = cons(request, rightAnswer);
  return gameSet;
};

const gcdGame = () => {
  game(ruleOfGame, getGameSet);
};
export default gcdGame;
