export { calcGame } from './calcGame.js';
export { evenGame } from './evenGame.js';
export { gcdGame } from './gcdGame.js';
export { progressionGame } from './progressionGame.js';
export { primeGame } from './primeGame.js';



/*import { calcGame,
         ruleOfGame,
         getGameSet } from './calcGame.js';*/
/*import { evenGame,
         ruleOfGame,
         getGameSet } from './evenGame.js';*/
/*import * as even from './evenGame.js';*/





import readlineSync from 'readline-sync';
import { cons, 
         car, 
         cdr } from '@hexlet/pairs';

export const game = () => {
        const QuantityOfRounds = 3;
        const userName = readlineSync.question('May I have your name? ');


console.log('Welcome to the Brain Games!');
console.log(`Hello, ${userName}!`);
console.log(ruleOfGame);

let counter = 0;
    while (counter < QuantityOfRounds) {
        const gameSet = getGameSet();
        const request = car(gameSet);
        const rightAnswer = cdr(gameSet);
        const answer = readlineSync.question(`Question: ${request}\nYour answer: `);
        const normAnswer = answer * 1 === NaN ? answer : answer * 1;
        if (normAnswer === rightAnswer) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(`"${answer}" is wrong answer :(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`)
};


