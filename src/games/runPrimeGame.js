import { cons } from '@hexlet/pairs';
import generator from '../generator.js';
import game from '..';

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
  const question = generator(100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const runPrimeGame = () => {
  game(ruleOfGame, getGameSet);
};
export default runPrimeGame;
