document.getElementById('cadastroForm').addEventListener('submit', function(event) {
   event.preventDefault(); /* evitar ações padrão em eventos */

   let username = document.getElementById('inome').value;
   let email = document.getElementById('iemail').value;
   let password = document.getElementById('isenha').value;
   let confPassword = document.getElementById('isenha-confirmar').value;
   let birthdate = document.getElementById('idata')

    if (!username || !email || !password || !confPassword || !birthdate) {
        alert('Preencha todos os campos para continuar');
        return;
    }

    if (password !== confPassword) {
        alert('As senhas estão diferentes!');
    }
}
)