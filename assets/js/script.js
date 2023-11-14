// Show and hide password & confirm password
let btn = document.getElementById('eye-senha')
let btnConfirm = document.getElementById("eye-confirm");

btn.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


btnConfirm.addEventListener("click", () => {
  let inputConfirmarSenha = document.querySelector('#confirmarSenha')

  if (inputConfirmarSenha.getAttribute('type') == 'password') {
    inputConfirmarSenha.setAttribute('type', 'text')
  } else {
    inputConfirmarSenha.setAttribute('type', 'password')
  }
})
/////////////////Show and hide - end//////////////////

function login() {
  alert('Login efetuado com sucesso!')
}