export const generator = () => {
    const num = Math.floor(Math.random() * 1000);
    while (num === 0) {
        num = Math.floor(Math.random() * 1000);
    }
    return num;
}
