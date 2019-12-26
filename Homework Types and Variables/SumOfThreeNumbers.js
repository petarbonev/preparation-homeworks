var input = [
    '5', 
    '4',
    '20',
];
 
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

let sum = a + b + c;

print(sum);