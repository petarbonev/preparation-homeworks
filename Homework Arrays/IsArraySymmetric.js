var input = [
    3, 4, 5, 3, 4, 5
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let result = '';

for (i = 0; i < input.length; i++) {
    if (input[i] === input[[input.length - 1] - i]) {
        result = 'Yes';
    } else {
        result = 'No';
    }
}
print(result);

