let a = -1;
let b = -0.5;
let c = -5.1;

if (a > 0 && b > 0 && c > 0) {
    console.log('+');
} else if (a < 0 && b < 0 && c > 0) {
    console.log('+');
} else if (a < 0 && b > 0 && c < 0) {
    console.log('+');
} else if (a > 0 && b < 0 && c < 0) {
    console.log('+');
} else if (a === 0 && b != 0 && c != 0) {
    console.log('0');
} else if (a != 0 && b === 0 && c != 0) {
    console.log('0');
} else if (a != 0 && b != 0 && c === 0) {
    console.log('0');
} else if (a < 0 && b > 0 && b != 0 && c > 0 && c != 0) {
    console.log('-');
} else if (a > 0 && a != 0 && b < 0 && c > 0 && c != 0) {
    console.log('-');
} else if (a > 0 && a != 0 && b > 0 && b != 0 && c < 0) {
    console.log('-');
} else if (a < 0 && b < 0 && c < 0) {
    console.log('-');
}