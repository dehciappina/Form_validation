 var botaoEnviar = document.querySelector('#enviar');
 var nome = document.querySelector('#nomeInput');
 var email = document.querySelector('#emailInput');
 var senha = document.querySelector('#senhaInput');

 var emptyError = document.querySelector('#empty_input');
 var lowPass = document.querySelector('#low_password');
 var emailVld = document.querySelector('#email_vld');


 botaoEnviar.addEventListener('click', function() {
    var emailValue = email.value;
    var arroba = emailValue.indexOf('@');
    console.log(emailValue);
    console.log(arroba);
    if(nome.value === "" || email.value === "" || senha.value === "") {
        emptyError.style.display = "block"

        setTimeout(function() {
            emptyError.style.display = "none"
        }, 1500)

    }
    else if(senha.value.length < 6) {
        lowPass.style.display = "block"

        setTimeout(function() {
            lowPass.style.display = "none"
        }, 1500)
    }

    else if(arroba == -1) {
        emailVld.style.display = "block"
        console.log('email')
        setTimeout(function() {
            emailVld.style.display = "none"
        }, 1500)
    }


    
// console.log(arroba);

console.log(emailValue);
 })