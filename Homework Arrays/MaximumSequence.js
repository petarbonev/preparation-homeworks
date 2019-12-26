let input = [2, 1, 3, 3, 3, 3, 2, 2, 2, 1];
let counter = 1;
let maxCounter = 1;


for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === input[i]) {
        counter++;
    } else {
        counter = 1;
    }
    if (counter > maxCounter) {
        maxCounter = counter;
    }
}
console.log(maxCounter);