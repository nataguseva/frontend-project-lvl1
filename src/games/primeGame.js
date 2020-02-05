import {
    generator,
    getPrimeGameAnswer,
    isPrime,
    getUserName
} from '../';

console.log('Welcome to the Brain Games!');
export const primeGame = () => {
    const userName = getUserName();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Hello, ${userName}!`);
    let counter = 0;
    while (counter < 3) {
        const num = generator() % 100;
        const answer = getPrimeGameAnswer(num);
        const rightAnswer = isPrime(num);
        if (answer === rightAnswer) {
            console.log('Correct!');
            counter += 1;
        } else {
        console.log(`"${answer}" is wrong answer :(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
        return;
        }
    } console.log(`Congratulations, ${userName}!`)
}
