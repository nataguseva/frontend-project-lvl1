export const gcdGameRightAnswer = (num1, num2) => {
    if (num1 % num2 === 0) {
        return num2;
    } return gcdGameRightAnswer(num2, num1 % num2);
}

