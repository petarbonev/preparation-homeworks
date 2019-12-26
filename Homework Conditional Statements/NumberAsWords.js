let digit = 0;
let output = '';
let tens = 1;
let outputTens = '';
let hundreds = 8;
let outputHundreds = '';
let outputTeens = '';


switch (digit) {
    case 0:
        output = 'Zero';
        break;
    case 1:
        output = 'One';
        break;
    case 2:
        output = 'Two';
        break;
    case 3:
        output = 'Three';
        break;
    case 4:
        output = 'Four';
        break;
    case 5:
        output = 'Five';
        break;
    case 6:
        output = 'Six';
        break;
    case 7:
        output = 'Seven';
        break;
    case 8:
        output = 'Eight';
        break;
    case 9:
        output = 'Nine';
        break;
}

switch (tens) {
    case 0:
        outputTens = '';
        break;
    case 1:
        outputTens = '';
        break;
    case 2:
        outputTens = 'Twenty ';
        break;
    case 3:
        outputTens = 'Thirty ';
        break;
    case 4:
        outputTens = 'Fourty ';
        break;
    case 5:
        outputTens = 'Fifty ';
        break;
    case 6:
        outputTens = 'Sixty ';
        break;
    case 7:
        outputTens = 'Seventy ';
        break;
    case 8:
        outputTens = 'Eighty ';
        break;
    case 9:
        outputTens = 'Ninety ';
        break;
}
switch (hundreds) {
    case 0:
        outputHundreds = '';
        break;
    case 1:
        outputHundreds = 'One hundred and ';
        break;
    case 2:
        outputHundreds = 'Two hundred and ';
        break;
    case 3:
        outputHundreds = 'Three hundred and ';
        break;
    case 4:
        outputHundreds = 'Four hundred and ';
        break;
    case 5:
        outputHundreds = 'Five hundred and ';
        break;
    case 6:
        outputHundreds = 'Six hundred and ';
        break;
    case 7:
        outputHundreds = 'Seven hundred and ';
        break;
    case 8:
        outputHundreds = 'Eight hundred and ';
        break;
    case 9:
        outputHundreds = 'Nine hundred and ';
        break;
}

switch (digit) {
    case 0:
        outputTeens = 'Ten';
        break;
    case 1:
        outputTeens = 'Eleven';
        break;
    case 2:
        outputTeens = 'Twelve';
        break;
    case 3:
        outputTeens = 'Thirteen';
        break;
    case 4:
        outputTeens = 'Fourteen';
        break;
    case 5:
        outputTeens = 'Fiveteen';
        break;
    case 6:
        outputTeens = 'Sixteen';
        break;
    case 7:
        outputTeens = 'Seventeen';
        break;
    case 8:
        outputTeens = 'Eighteen';
        break;
    case 9:
        outputTeens = 'Nineteen';
        break;
}


let finalOutput = (outputHundreds + outputTens + output);
let indexOfAnd = outputHundreds.indexOf('and');


if (hundreds !== 0 && tens === 0 && digit === 0) {
    console.log(outputHundreds.slice(0, indexOfAnd));
} else if (hundreds !== 0 && tens === 1 && 0 <= digit < 9) {
    console.log(outputHundreds + outputTeens.toLowerCase());
} else if (hundreds === 0 && tens === 1 && 0 <= digit < 9) {
    console.log(outputTeens);
} else if (hundreds === 0 && tens !== 0 && digit === 0) {
    console.log(outputTens);
} else if (hundreds !== 0 && tens !== 0 && digit === 0) {
    console.log(outputHundreds + outputTens.toLowerCase());
} else {
    console.log(finalOutput.charAt(0).toUpperCase() + finalOutput.slice(1).toLowerCase());
}


