var input = [
    2, 1, 2, 1, 2, 1, 2
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let result = '';

for (let i = 1; i < input.length; i++) {
    if (i % 2 === 0) {
        if (input[i] > input[i - 1]) {
            result = 'Yes';
        } else {
            result = 'No'
            break;
        }
    }
    if (i % 2 !== 0) {
        if (input[i] < input[i - 1]) {
            result = 'Yes';
        } else {
            result = 'No';
            break;
        }
    }
}
console.log(result);