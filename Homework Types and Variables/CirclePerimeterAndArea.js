var input = [
    '3.5', 
];
 
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let radius = gets();

let perimeter = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

print('The Perimeter is: ' + perimeter.toFixed(2));
print('The Area is: ' + area.toFixed(2));