import readlineSync from 'readline-sync';
export const getAnswer = (num) => {
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `).toLowerCase();
  return answer;
}
