import { cons } from '@hexlet/pairs';
import getRandomNumber from '../randomNumber.js';
import runGame from '..';

const ruleOfGame = 'What number is missing in the progression?';
const getMissingNumber = (start, diff, index) => start + diff * index;
const getGameSet = () => {
  const start = getRandomNumber(1, 10);
  const diff = getRandomNumber(1, 10);
  const indexOfMissingNumber = getRandomNumber(0, 9);
  let string = `${start}`;
  let nextNumber = start + diff;
  const rightAnswer = getMissingNumber(start, diff, indexOfMissingNumber);
  for (let i = 0; i <= 9; i += 1) {
    if (nextNumber === rightAnswer || start === rightAnswer) {
      string += ' ..';
      nextNumber += diff;
    }
    string += ` ${nextNumber}`;
    nextNumber += diff;
  }
  return cons(string, rightAnswer.toString());
};
const runProgressionGame = () => {
  runGame(ruleOfGame, getGameSet);
};
export default runProgressionGame;
