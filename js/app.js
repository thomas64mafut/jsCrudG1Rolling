console.log('hola pa estoy andando');

const buttons = document.getElementById('buttons');
const users = JSON.parse(localStorage.getItem('users'));
const user = JSON.parse(localStorage.getItem('user'));

const logout = () => {
    localStorage.removeItem('user');
    return alert('Desconectado con exito')
};

if (user) {
    buttons.innerHTML = `<a href="./../index.html" onclick="logout()">Desconectarse</a>`
};