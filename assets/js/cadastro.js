// Operação de cadastro de usuário

let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')

// validação value.length user

user.addEventListener('keyup', ()=> {
    if (user.value.length <= 4) {
        labelUser.setAttribute('style', 'background-color: red')
        labelUser.innerHTML = 'Insira no mínimo 5 caracteres.'
        user.setAttribute('style', 'border-color: red')
    } else {
        labelUser.setAttribute('style', 'background-color: green')
        labelUser.innerHTML = 'User'
        user.setAttribute('style', 'border-color: green')
    }   
})

// validação value.length email 

email.addEventListener('keyup', () => {
  if (email.value.length <= 4) {
    labelEmail.setAttribute('style', 'background-color: red')
    labelEmail.innerHTML = 'Insira um e-mail válido.'
    email.setAttribute('style', 'border-color: red')
  } else {
    labelEmail.setAttribute('style', 'background-color: green')
    labelEmail.innerHTML = 'E-mail'
    email.setAttribute('style', 'border-color: green')
  }
});

//validação value.length senha

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 7 ) {
    labelSenha.setAttribute('style', 'background-color: red')
    labelSenha.innerHTML = 'Insira no mínimo 8 caracteres.'
    senha.setAttribute('style', 'border-color: red')
  } else {
    labelSenha.setAttribute('style', 'background-color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    
  }
})

confirmarSenha.addEventListener('keyup', () => {
  if (confirmarSenha.value.length <= 7 ) {
    labelConfirmarSenha.setAttribute("style", "background-color: red");
    labelConfirmarSenha.innerHTML = "Insira no mínimo 8 caracteres.";
    confirmarSenha.setAttribute('style', 'border-color: red')
  } else {
    labelConfirmarSenha.setAttribute("style", "background-color: green");
    labelConfirmarSenha.innerHTML = "Senha";
    confirmarSenha.setAttribute('style', 'border-color: green')
  }
})



function cadastrar () {

    alert('Cadastro efetuado!')
    location.replace(location.href='/login.html')

}