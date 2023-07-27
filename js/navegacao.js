document.addEventListener('DOMContentLoaded', function () {
    navegacaoInicial()
})

function navegacaoInicial() {
    let main = document.getElementsByTagName('main')[0];
    fetch('../paginas/fundamentos.html')
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.text();
            } else {
                throw new Error('Erro ao carregar HTML');
            }
        })
        .then(function (main) {
            main.innerHTML = main;
        })
        .catch(function (erro) {
            console.error(erro);
        });
}