import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import generator from '../generator.js';
import game from './index.js';

const ruleOfGame = 'What is the result of the expression?';
const getGameSet = () => {
  let request = '';
  const num1 = generator() % 100;
  const num2 = generator() % 10;
  // eslint-disable-next-line consistent-return
  const getOperation = (numb1, numb2) => {
    const remainder = Math.floor(Math.random() * 1000) % 3;
    switch (remainder) {
      case 0:
        return cons(numb1 + numb2, '+');
      case 1:
        return cons(numb1 - numb2, '-');
      case 2:
        return cons(numb1 * numb2, '*');
      default:
        break;
    }
  };
  const pair = getOperation(num1, num2);
  request = `${num1} ${cdr(pair)} ${num2}`;
  const rightAnswer = car(pair).toString();
  const gameSet = cons(request, rightAnswer);
  return gameSet;
};
const calcGame = () => {
  game(ruleOfGame, getGameSet);
};
export default calcGame;
