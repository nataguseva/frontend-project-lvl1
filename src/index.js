
import readlineSync from 'readline-sync';
import {
  car,
  cdr,
} from '@hexlet/pairs';

const QuantityOfRounds = 3;
const game = (ruleOfGame, getGameSet) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfGame);

  let counter = 0;
  while (counter < QuantityOfRounds) {
    const gameSet = getGameSet();
    const request = car(gameSet);
    const rightAnswer = cdr(gameSet);
    const answer = readlineSync.question(`Question: ${request}\nYour answer: `);
    if (answer === rightAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${answer}" is wrong answer :(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default game;
