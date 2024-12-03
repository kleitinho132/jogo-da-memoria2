const form = document.querySelector('.login-form');
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');

// função para adicionar o botão jogar
const validateInput = ({target}) => {

if (target.value.length > 2) {

    button.removeAttribute('disabled');
    return;
}
 
button.setAttribute('disabled', '')
}

// função para gurdar ov nome no local strorage
const handleSubmit = (event) => {

event.preventDefault();

    localStorage.setItem('player', input.value);
    input.value = '';

    window.location = 'pages/game.html'
}

form.addEventListener('submit', handleSubmit);
input.addEventListener('input', validateInput);