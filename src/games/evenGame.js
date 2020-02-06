import { generator } from '../';
import { game } from './index.js';
import { cons } from '@hexlet/pairs';




export const evenGame = () => {
    const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
     
    const getGameSet = () => {
        const num = generator();
        const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
        return cons(num, rightAnswer);
    }
    game(ruleOfGame, getGameSet);
}
 
