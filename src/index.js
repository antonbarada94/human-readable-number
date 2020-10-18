module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    let numString = number.toString();
    let units = `${numbers[numString[2]]}`;
    let tens = `${numbers[numString[1] + 0]}`;
    let hundreds = `${numbers[numString[0]]} hundred`;

    if (numString.length < 3) {
        if (number < 20 || +numString[1] === 0) {
            return numbers[numString];
        } else {
            return `${numbers[numString[0] + 0]} ${numbers[numString[1]]}`;
        }
    } else {
        if (+numString[1] === 0 && +numString[2] === 0) {
            return `${hundreds}`;
        } else if (+numString[1] === 0) {
            return `${hundreds} ${units}`;
        } else if (+numString[2] === 0) {
            return `${hundreds} ${tens}`
        } else if (+numString[1] < 2) {
            return `${hundreds} ${numbers[numString[1] + numString[2]]}`;
        } 
        return `${hundreds} ${tens} ${units}`;
    }
};
