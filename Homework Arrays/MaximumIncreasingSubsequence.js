var input = [
    1, 2, 3, 4, 3, 1, 9, 4, 5, 6, 11
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let currentSequence = [input[0]];
let sequences = [];

for (let i = 1; i < input.length; i++) {
    if (input[i - 1] < input[i]) {
        currentSequence.push(input[i])
    } else {
        sequences.push(currentSequence);
        currentSequence = [];
        currentSequence.push(input[i]);
    }
}
if (currentSequence.length > 1) {
    sequences.push(currentSequence);
}

let maxLenght = Number.MIN_SAFE_INTEGER;
let longestSequenceIndex;

for (let j = 0; j < sequences.length; j++) {
    if (sequences[j].length >= maxLenght) {
        maxLenght = sequences[j].length;
        longestSequenceIndex = j;
    }
}

console.log(sequences[longestSequenceIndex]);
