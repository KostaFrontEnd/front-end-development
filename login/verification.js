function verification() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'new_user' && password === '123456789') {
        document.getElementById('info').innerHTML = 'Successful login!'
        document.getElementById('username').style.borderColor = 'green'
        document.getElementById('password').style.borderColor = 'green'
        document.getElementById('iconCheck').innerHTML = 'check_circle_outline'
        document.getElementById('iconCheck').style.color = 'green'
        document.getElementById('iconCheck2').innerHTML = 'check_circle_outline'
        document.getElementById('iconCheck2').style.color = 'green'
        console.log('Succesful login!')
        event.preventDefault()
    } else if (username === '' && password === '') {
        document.getElementById('info').innerHTML = 'Username and password can not be empty'
        document.getElementById('username').style.borderColor = 'red'
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('iconCheck').innerHTML = 'highlight_off'
        document.getElementById('iconCheck').style.color = 'red'
        document.getElementById('iconCheck2').innerHTML = 'highlight_off'
        document.getElementById('iconCheck2').style.color = 'red'
        console.log('Please enter username and passwrod')
        event.preventDefault()
    } else if (username !== 'new_user' && password !== '123456789') {
        document.getElementById('info').innerHTML = 'Username and password are not valid'
        document.getElementById('username').style.borderColor = 'red'
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('iconCheck').innerHTML = 'highlight_off'
        document.getElementById('iconCheck').style.color = 'red'
        document.getElementById('iconCheck2').innerHTML = 'highlight_off'
        document.getElementById('iconCheck2').style.color = 'red'
        console.log('Username and password are not valid')
        event.preventDefault()
    } else if (username === '' && password === '123456789') {
        document.getElementById('info').innerHTML = 'Please, enter username'
        document.getElementById('username').style.borderColor = 'red'
        document.getElementById('password').style.borderColor = 'green'
        document.getElementById('iconCheck').innerHTML = 'highlight_off'
        document.getElementById('iconCheck').style.color = 'red'
        document.getElementById('iconCheck2').innerHTML = 'check_circle_outline'
        document.getElementById('iconCheck2').style.color = 'green'
        console.log('Your username is empty')
        event.preventDefault()
    } else if (username !== 'new_user' && password === '123456789') {
        document.getElementById('info').innerHTML = 'Please, enter valid username'
        document.getElementById('username').style.borderColor = 'red'
        document.getElementById('password').style.borderColor = 'green'
        document.getElementById('iconCheck').innerHTML = 'highlight_off'
        document.getElementById('iconCheck').style.color = 'red'
        document.getElementById('iconCheck2').innerHTML = 'check_circle_outline'
        document.getElementById('iconCheck2').style.color = 'green'
        console.log('Your username is invalid')
        event.preventDefault()
    } else if (username !== 'new_user' && password === '') {
        document.getElementById('info').innerHTML = 'Username not found'
        document.getElementById('username').style.borderColor = 'red'
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('iconCheck').innerHTML = 'highlight_off'
        document.getElementById('iconCheck').style.color = 'red'
        document.getElementById('iconCheck2').innerHTML = 'highlight_off'
        document.getElementById('iconCheck2').style.color = 'red'
        console.log('Username not found')
        event.preventDefault()
    } else if (username === 'new_user' && password === '') {
        document.getElementById('info').innerHTML = 'Please, enter password'
        document.getElementById('username').style.borderColor = 'green'
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('iconCheck').innerHTML = 'check_circle_outline'
        document.getElementById('iconCheck').style.color = 'green'
        document.getElementById('iconCheck2').innerHTML = 'highlight_off'
        document.getElementById('iconCheck2').style.color = 'red'
        console.log('Your passwrod is empty')
        event.preventDefault()
    } else if (username === 'new_user' && password !== '123456789') {
        document.getElementById('info').innerHTML = 'Please, enter valid password'
        document.getElementById('username').style.borderColor = 'green'
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('iconCheck').innerHTML = 'check_circle_outline'
        document.getElementById('iconCheck').style.color = 'green'
        document.getElementById('iconCheck2').innerHTML = 'highlight_off'
        document.getElementById('iconCheck2').style.color = 'red'
        console.log('Your passwrod is invalid')
        event.preventDefault()
    } else if (username === '' && password !== '123456789') {
        document.getElementById('info').innerHTML = 'Username and password are not valid'
        document.getElementById('username').style.borderColor = 'red'
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('iconCheck').innerHTML = 'highlight_off'
        document.getElementById('iconCheck').style.color = 'red'
        document.getElementById('iconCheck2').innerHTML = 'highlight_off'
        document.getElementById('iconCheck2').style.color = 'red'
        console.log('Username and password are not valid')
        event.preventDefault()
    } else {
        console.log('Your username and password are invalid')
    }
}
