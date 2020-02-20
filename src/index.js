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
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer :(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
