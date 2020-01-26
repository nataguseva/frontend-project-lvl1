import readlineSync from 'readline-sync';

export const getGcdGameAnswer = (num1, num2) => {
    const answer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
    return answer;
}
