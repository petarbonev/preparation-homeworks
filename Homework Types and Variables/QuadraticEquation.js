var input = [
    '-1', 
    '3',
    '0'
];
 
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let a = +gets();
let b = +gets();
let c = +gets();

let x1 = (((-b) - Math.sqrt((b**2)-(4*a*c))) / (2*a));
let x2 = (((-b) + Math.sqrt((b**2)-(4*a*c))) / (2*a));

print('x1 = ' + x1);
print('x2 = ' + x2);