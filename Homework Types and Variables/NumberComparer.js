var input = [
    '-5', 
    '-2',
];
 
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();

let greater = Math.max(a, b);

print(greater);
