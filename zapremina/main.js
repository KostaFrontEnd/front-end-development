function declaration() {
    let a = parseInt(validate(document.getElementById('a').value.trim()))
    let b = parseInt(validate(document.getElementById('b').value.trim()))
    let c = 3.14

    document.getElementById('d').value = calculation(a, b, c)
}

function calculation(a, b, c) {
    return a * b * c
}

function validate(value) {
    if (value == '' || value == null) {
        alert('Obavezno polje')
        return 0
    } else if (isNaN(value)) {
        alert('Vrednost mora biti u obliku broja!')
        return 0
    } else return value;
}