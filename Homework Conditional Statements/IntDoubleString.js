var input = [
    '4',
    '4',
    '2',
    'Hello'
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


console.log('Please choose a type: ');
console.log('1 --> int');
console.log('2 --> double');
console.log('3 --> string');

choice = +gets();
enterInt = +gets();
enterDouble = +gets();
enterString = gets();

switch (choice) {
    case 1:
        console.log('Please enter a int: ' + enterInt);
        console.log(enterInt + 1);
        break;
    case 2:
        console.log('Please enter a double: ' + enterDouble);
        console.log(enterDouble + 1);
        break;
    case 3:
        console.log('Please enter a string: ' + enterString);
        console.log(enterString + '*');
        default:
            console.log('Invalid Number!');
}