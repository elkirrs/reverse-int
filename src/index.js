module.exports = function reverse (n) {
    let num = Math.abs(n);
    return Number(String(num).split('').reverse().join(''));
};
