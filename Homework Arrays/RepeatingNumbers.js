var input = [
    1, 2, 3, 4, 5, 6, 5, 8, 9
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (input[i] === input[j]) {
            console.log(input[i]);
        }
    }
}