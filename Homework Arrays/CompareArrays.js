var input = [
    '3',
    '2',
    '4',
    '6',
    '2',
    '4',
    '6'
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();

let arr1 = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
    arr1.push(+gets());
}
for (let j = 0; j < n; j++) {
    arr2.push(+gets());
}

let result = '';
for (k = 0; k < n; k++) {
    if (arr1[k] === arr2[k]) {
        result = 'Equal';
    } else {
        result = 'Not equal';
        break;
    }
}

console.log(result);