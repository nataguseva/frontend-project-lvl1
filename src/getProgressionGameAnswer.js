import readlineSync from 'readline-sync';

export const getProgressionGameAnswer = (string) => {
    const answer = readlineSync.question(`Question: ${string}\nYour answer: `);
    return answer;
}
