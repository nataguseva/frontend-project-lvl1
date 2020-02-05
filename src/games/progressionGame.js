import {
    generator,
    getProgressionGameAnswer,
    getUserName
} from '../';

console.log('Welcome to the Brain Games!');
export const progressionGame = () => {
    const userName = getUserName();

    console.log('What number is missing in the progression?');
    console.log(`Hello, ${userName}!`);
    let counter = 0;
    while (counter < 3) {
        const start = generator() % 10;
        const step = generator() % 10 + 1;
        const indexOfHiddenNumber = generator() % 10;

        let string = `${start}`;
        let nextNumber = start + step;

        for (let i = 0; i < indexOfHiddenNumber; i += 1) {
            string += ` ${nextNumber}`;
            nextNumber += step;
        }
        const rightAnswer = nextNumber;
        string += ' ..';

        for (let i = indexOfHiddenNumber; i < 10; i += 1) {

            nextNumber += step;
            string += ` ${nextNumber}`;
        }
    
        const answer = getProgressionGameAnswer(string);
    if (answer * 1 === rightAnswer) {
        console.log('Correct!');
        counter += 1;
    } else {
        console.log(`"${answer}" is wrong answer :(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
        return;
    }
    }
console.log(`Congratulations, ${userName}!`);
}
