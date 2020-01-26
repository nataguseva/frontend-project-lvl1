import {
    generator,
    getOperation,
    getCalcGameAnswer,
    calcGameRightAnswer,
    getUserName
} from '../';
import {
    cons,
    car,
    cdr
} from '@hexlet/pairs';

export const calcGame = () => {
    const userName = getUserName();

    console.log('What is the result of the expression?');
    console.log(`Hello, ${userName}!`);
    let counter = 0;
    while (counter < 3) {
        const num1 = generator() % 100;
        const num2 = generator() % 10;
        const pair = getOperation();
        const answer = getCalcGameAnswer(num1, num2, pair);
        const rightAnswer = calcGameRightAnswer(num1, num2, pair);
        if (answer * 1 === rightAnswer) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(`"${answer}" is wrong answer :(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`)
}
