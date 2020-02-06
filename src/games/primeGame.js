import {
    generator } from '../';
import { game } from './index.js';
import { cons } from '@hexlet/pairs';


export const primeGame = () => {
    const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const getGameSet = () => {
        const num = generator() % 100;
        const getRightAnswer = (num) => {
            let result;
        
            if (num <= 1) {
                result = 'no';
            } else if (num === 2) {
                result = 'yes';
            } else {
                for (let counter = 2; counter < num; counter += 1) {
                    if (num % counter === 0) {
                        result = 'no';
                        break;
                    }
                    result = 'yes';
                }
            }
            return result;
        }
        const rightAnswer = getRightAnswer(num).toString();
        return cons(num, rightAnswer);
    }
    game(ruleOfGame, getGameSet);
}
