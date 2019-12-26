let n = 6;
let input = [1, 2, 3, 4, 3, 6, 5, 8, 3, 9];

let sum = [];
let finalSum = [];

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (input[i] + input[j] === n) {
            sum.push(input[i], input[j]);
            finalSum.push(sum);
            sum = [];
        }
    }
}

for (k = 0; k < finalSum.length; k++) {
    console.log((finalSum[k]).toString());
}
