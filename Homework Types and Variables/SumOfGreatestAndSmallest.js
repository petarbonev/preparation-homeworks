var input = [
    '1', 
    '2',
    '3',
];
 
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

let greatestNumber = Math.max(a, b, c);
let smallestNumber = Math.min(a, b, c);

print(greatestNumber + smallestNumber);
