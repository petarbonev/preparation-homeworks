var input = [
    '10', 
    '10',
    '10',
    '10',
    '10',
];
 
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();
let d = +gets();
let e = +gets();

let sum = a + b + c + d + e;

print(sum);