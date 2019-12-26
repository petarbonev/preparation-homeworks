let firstString = 'own';
let secondString = 'own';
let result = '';

let maxLength = Math.max(firstString.length, secondString.length);

for (let i = 0; i < maxLength; i++) {
    if (firstString.charCodeAt(i) === secondString.charCodeAt(i)) {
        result = 'Equal';
    } else if (firstString.charCodeAt(i) > secondString.charCodeAt(i)) {
        result = 'Second';
    } else {
        result = 'First';
    }

}
console.log(result);