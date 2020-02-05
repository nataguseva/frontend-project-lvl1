import {
    generator
} from '..';
import {
    cons,
    car,
    cdr
} from '@hexlet/pairs';
import { game } from './index.js';


const ruleOfGame = 'What is the result of the expression?';
const getGameSet = () => {
    let request = '';
    const num1 = generator() % 100;
    const num2 = generator() % 10;
    
    const getOperation = (num1, num2) => {
        const remainder = Math.floor(Math.random() * 1000) % 3;
        switch (remainder) {
            case 0:
                return cons(num1 + num2, '+');
            case 1:
                return cons(num1 - num2, '-');
            case 2:
                return cons(num1 * num2, '*');
        }
    };
    const pair = getOperation(num1, num2);
    request = `${num1} ${cdr(pair)} ${num2}`;
    const rightAnswer = car(pair);
    const gameSet = cons(request, rightAnswer);
    return gameSet;
};
export const calcGame = () => {
    game();
    
    
    
    
};
