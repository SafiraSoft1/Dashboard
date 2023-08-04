document.addEventListener('DOMContentLoaded', function () {
    navegacaoInicial()
})

function navegacaoInicial() {
    let main = document.getElementById('main');
    fetch('../paginas/fundamentos.html')
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.text();
            } else {
                throw new Error('Erro ao carregar HTML');
            }
        })
        .then(function (conteudo) {
            main.innerHTML = conteudo;
        })
        .catch(function (erro) {
            console.error(erro);
        });
}

document.querySelectorAll('[wm-folder]').forEach(folder => {
    folder.onclick = function(e) {
        const ul = folder.nextElementSibling
        const d = ul.style.display
        ul.style.display = d === 'none' ? 'block' : 'none'
    }
})
