import readlineSync from 'readline-sync';
export const hello = () => {
const userName = readlineSync.question('May I have your name?');
return userName;
}
