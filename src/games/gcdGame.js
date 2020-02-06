import { generator } from '../';
import { cons } from '@hexlet/pairs';
import { game } from './index.js';

const getGameSet = () => {
    let request = '';
    const num1 = generator();
    const num2 = generator() % 100;
    request = `${num1} ${num2}`;
    const getRightAnswer = (num1, num2) => {
        if (num1 % num2 === 0) {
            return num2;
        } return getRightAnswer(num2, num1 % num2);
    }
    const rightAnswer = getRightAnswer(num1, num2).toString();
    const gameSet = cons(request, rightAnswer);
    return gameSet;
}


export const gcdGame = () => {
    const ruleOfGame = 'Find the greatest common divisor of given numbers!';
    game(ruleOfGame, getGameSet); 
}
