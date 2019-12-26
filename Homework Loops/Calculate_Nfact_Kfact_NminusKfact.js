function rFact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * rFact(num - 1);
    }
}

let n = 52;
let k = 5;

let factoial = 0;

factoial = rFact(n)/((rFact(k)) * (rFact(n - k)));
console.log(factoial);

