import { cons } from '@hexlet/pairs';
import generator from '../generator.js';
import game from './index.js';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let result;
  if (num <= 1) {
    result = false;
  } else if (num === 2) {
    result = true;
  } else {
    for (let counter = 2; counter < num; counter += 1) {
      if (num % counter === 0) {
        result = false;
        break;
      }
      result = true;
    }
  }
  return result;
};

const getGameSet = () => {
  const num = generator() % 100;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(num, rightAnswer);
};
const primeGame = () => {
  game(ruleOfGame, getGameSet);
};
export default primeGame;
