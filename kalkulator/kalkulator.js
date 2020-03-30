function declaration() {
    var a = parseInt(validate(document.getElementById("a").value.trim()));
    var c = parseInt(validate(document.getElementById("c").value.trim()));
    var b = document.getElementById('b').value;
    document.getElementById("result").value = calculation(a, c, b);
}

function calculation(a, c, b) {
    if (b == 'sabiranje') {
        return a + c
    } else if (b == 'oduzimanje') {
        return a - c
    } else if (b == 'mnozenje') {
        return a * c
    } else if (b == 'deljenje') {
        return a / c
    }
    console.log('test123')
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