import { generator } from '../';
import { game } from './index.js';
import { cons } from '@hexlet/pairs';


const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';


export const evenGame = () => {
     
    const getGameSet = () => {
        const num = generator();
        const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
        return cons(num, rightAnswer);
    }
    game();
}
 
