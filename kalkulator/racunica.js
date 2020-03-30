let a = parseInt(prompt('Unesite prvi broj'));
let b = prompt('Izaberite racunsku operaciju (+, -, *, /)');
let c = parseInt(prompt('Unesite drugi broj'));

switch(b) {
    case '+':
        b = a + c;
        break;
    case '-':
        b = a - c;
        break;
    case '*':
        b = a * c;
        break;
    case '/':
        b = a / c;
    default:
        alert('Niste uneli dobru racunsku operaciju!')
}

console.log(alert('Rezultat je ' + b))