(function () {
    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        if(!link) return

        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                const resultado = html.match(/\<script\>([\s\S]*)\<\/script\>/)
                if(resultado && resultado.length >= 2){
                    eval(resultado[1])
                }
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        let main = document.getElementsByTagName('main');
        fetch('../paginas/fundamentos.html')
            .then(function (resposta) {
                if (resposta.ok) {
                    return resposta.text();
                } else {
                    throw new Error('Erro ao carregar HTML');
                }
            })
            .then(function (conteudo) {
                section.innerHTML = conteudo;
            })
            .catch(function (erro) {
                console.error(erro);
            });
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()