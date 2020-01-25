import readlineSync from 'readline-sync';
import { cdr } from '@hexlet/pairs';
export const getCalcGameAnswer = (num1, num2, pair) => {
    const answer = readlineSync.question(`Question: ${num1} ${cdr(pair)} ${num2}\nYour answer: `);
  return answer;
}
