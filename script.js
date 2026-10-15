const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

const usuarioDigitado = document.getElementById('usuario').value;
const senhaDigitada = document.getElementById('senha').value;

const usuarioCorreto = "admin@gmail.com";
const senhaCorreta = "1234";

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    alert("Bem-vindo! Você será redirecionado para a página principal.");

    window.location.href = "telaInicial.html"; // Redireciona para a página principal
    
} else {
    alert("Usuário ou senha incorretos. Tente novamente.");
}
});