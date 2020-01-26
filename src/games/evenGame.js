import {
    generator,
    getAnswer,
    isEven,
    getUserName
} from '../';

export const evenGame = () => {
    const userName = getUserName();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Hello, ${userName}!`);
    let counter = 0;
    while (counter < 3) {
        const num = generator();
        const answer = getAnswer(num);
        const rightAnswer = isEven(num);
        if (answer === rightAnswer) {
            console.log('Correct!');
            counter += 1;
        } else {
        console.log(`"${answer}" is wrong answer :(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
        return;
        }
    } console.log(`Congratulations, ${userName}!`)
}
