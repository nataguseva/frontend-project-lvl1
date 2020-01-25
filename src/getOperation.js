import {
    cons,
    car,
    cdr
} from '@hexlet/pairs';

export const getOperation = () => {
    const remainder = Math.floor(Math.random() * 1000) % 3;
    switch (remainder) {
        case 0:
            return cons((num1, num2) => num1 + num2, '+');
        case 1:
            return cons((num1, num2) => num1 - num2, '-');
        case 2:
            return cons((num1, num2) => num1 * num2, '*');
    }
}
