var input = [
    1,
    2,
    4,
    8,
    12,
    34,
    200,
    2000
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let isSorted = '';

for (let i = 1; i < input.length; i++) {
    if (input[i - 1] <= input[i]) {
        isSorted = 'Yes';
    } else {
        isSorted = 'No';
    }
}
console.log(isSorted);