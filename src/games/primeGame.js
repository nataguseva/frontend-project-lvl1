import { cons } from '@hexlet/pairs';
import getRandomNumber from '../randomNumber.js';
import runGame from '..';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let div = 2; div <= num / 2; div += 1) {
    if (num % div === 0) {
      return false;
    }
  } return true;
};

const getGameSet = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer.toString());
};
const runPrimeGame = () => {
  runGame(ruleOfGame, getGameSet);
};
export default runPrimeGame;
