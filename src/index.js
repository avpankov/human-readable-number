module.exports = function toReadable(number) {
// function toReadable(number) {
    const arr = number.toString().split('');

    let [third, second, first] = arr.reverse();

    const digits = {
        "1": " one",
        "2": " two",
        "3": " three",
        "4": " four",
        "5": " five",
        "6": " six",
        "7": " seven",
        "8": " eight",
        "9": " nine",
        "0": " zero"
    };

    const decimals = {
        "0": "",
        "2": " twenty",
        "3": " thirty",
        "4": " forty",
        "5": " fifty",
        "6": " sixty",
        "7": " seventy",
        "8": " eighty",
        "9": " ninety"
    };

    const edDec = {
        "10": " ten",
        "11": " eleven",
        "12": " twelve",
        "13": " thirteen",
        "14": " fourteen",
        "15": " fifteen",
        "16": " sixteen",
        "17": " seventeen",
        "18": " eighteen",
        "19": " nineteen"
    };

    first = (arr.length === 3) ? `${digits[first]} hundred` : '';

    if (arr.length >= 2) {
        if (second == 1) {
            second = edDec[second + third];
            third = '';
        } else {
            second = decimals[second];
            third = (third != 0) ? digits[third] : '';
        }
    } else {
        second = '';
        third = digits[third];
    }

    return (first + second + third).trim();
}

// console.log(toReadable(6));
// console.log(toReadable(10));
// console.log(toReadable(16));
// console.log(toReadable(46));
// console.log(toReadable(516));