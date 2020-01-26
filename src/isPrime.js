export const isPrime = (num) => {
    let result;

    if (num <= 1) {
        result = 'no';
    } else if (num === 2) {
        result = 'yes';
    } else {
        for (let counter = 2; counter < num; counter += 1) {
            if (num % counter === 0) {
                result = 'no';
                break;
            }
            result = 'yes';
        }
    }
    return result;
}
