import {
    generator,
    getGcdGameAnswer,
    gcdGameRightAnswer,
    getUserName
} from '../';
import {
    cons,
    car,
    cdr
} from '@hexlet/pairs';

console.log('Welcome to the Brain Games!');
export const gcdGame = () => {
    const userName = getUserName();

    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Hello, ${userName}!`);
    let counter = 0;
    while (counter < 3) {
        const num1 = generator();
        const num2 = generator() % 100;
        const answer = getGcdGameAnswer(num1, num2);
        const rightAnswer = gcdGameRightAnswer(num1, num2);
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
