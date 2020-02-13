import { cons } from '@hexlet/pairs';
import generator from '../generator.js';
import game from '..';

const ruleOfGame = 'Find the greatest common divisor of given numbers!';
const getGameSet = () => {
  let question = '';
  const num1 = generator(100);
  const num2 = generator(100);
  question = `${num1} ${num2}`;
  const getRightAnswer = (numb1, numb2) => {
    if (numb1 % numb2 === 0) {
      return numb2;
    } return getRightAnswer(numb2, numb1 % numb2);
  };
  const rightAnswer = getRightAnswer(num1, num2).toString();
  const gameSet = cons(question, rightAnswer);
  return gameSet;
};

const runGcdGame = () => {
  game(ruleOfGame, getGameSet);
};
export default runGcdGame;
