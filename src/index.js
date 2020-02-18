
import readlineSync from 'readline-sync';
import {
  car,
  cdr,
} from '@hexlet/pairs';

const QuantityOfRounds = 3;
const runGame = (ruleOfGame, getGameSet) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfGame);

  for (let round = 0; round < QuantityOfRounds; round += 1) {
    const gameSet = getGameSet();
    const question = car(gameSet);
    const rightAnswer = cdr(gameSet);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer :(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
