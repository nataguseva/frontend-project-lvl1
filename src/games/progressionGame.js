import { cons } from '@hexlet/pairs';
import getRandomNumber from '../randomNumber.js';
import runGame from '..';

const ruleOfGame = 'What number is missing in the progression?';
const progressionsLength = 10;
const getGameSet = () => {
  const start = getRandomNumber(1, 10);
  const diff = getRandomNumber(1, 10);
  const indexOfMissingNumber = getRandomNumber(1, progressionsLength);
  let question = `${start}`;
  const rightAnswer = start + diff * indexOfMissingNumber;
  for (let i = 1; i < progressionsLength; i += 1) {
    if (i === indexOfMissingNumber) {
      question = `${question} ..`;
      i += 1;
    }
    question = `${question} ${start + diff * i}`;
  }
  return cons(question, rightAnswer.toString());
};
const runProgressionGame = () => {
  runGame(ruleOfGame, getGameSet);
};
export default runProgressionGame;
