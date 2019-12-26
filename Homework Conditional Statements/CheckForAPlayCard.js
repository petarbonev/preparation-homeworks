let card = '3';

switch (card) {
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
        console.log('yes');
        break;
    default:
        console.log('no');
}