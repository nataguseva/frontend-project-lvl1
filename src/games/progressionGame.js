import { cons } from '@hexlet/pairs';
import generator from '../generator.js';
import game from './index.js';

const ruleOfGame = 'What number is missing in the progression?';
const getGameSet = () => {
  const start = generator() % 10;
  const step = (generator() % 10) + 1;
  const indexOfHiddenNumber = generator() % 10;
  let string = `${start}`;
  let nextNumber = start + step;
  for (let i = 0; i < indexOfHiddenNumber; i += 1) {
    string += ` ${nextNumber}`;
    nextNumber += step;
  }
  const rightAnswer = nextNumber;
  string += ' ..';
  for (let i = indexOfHiddenNumber; i < 10; i += 1) {
    nextNumber += step;
    string += ` ${nextNumber}`;
  }
  return cons(string, rightAnswer.toString());
};
const progressionGame = () => {
  game(ruleOfGame, getGameSet);
};
export default progressionGame;
