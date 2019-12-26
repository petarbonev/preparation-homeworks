var input = [
    7, 2, -2, 1, -5, 4, 5, -3, 1
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let positiveNumbers = [];
let negativeNumbers = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
        positiveNumbers.push(input[i]);
    } else {
        negativeNumbers.push(input[i]);
    }
}

console.log(negativeNumbers.join(' ') + ' ' + positiveNumbers.join(' '))
