var input = [
    8, 7, 8, 11, 7, 11, 5, 8, 10
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


input.sort((a, b) => b - a);

console.log(input[0] + ' ' + input[1]);
