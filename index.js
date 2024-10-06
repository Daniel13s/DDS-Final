function clicar() {
    //Criação do menu
    var nav = document.getElementById("nav")
    var body = document.getElementById("body")
    var menu = document.createElement('div')
    menu.setAttribute('id', 'menu')
    nav.appendChild(menu)

    //Atribuindo conteudo ao menu
    //DANIEL
    var daniel = document.createElement('a')
    daniel.setAttribute('id', 'daniel')
    daniel.setAttribute('href', 'https://www.instagram.com/danstart_/')
    daniel.setAttribute('target', '_blank')
    daniel.setAttribute('rel', 'external')
    daniel.innerText = "@danstart_"
    menu.appendChild(daniel)


    //Excluindo o menu
    body.addEventListener('click', excluirpc)
    function excluirpc() {
        var menu = document.getElementById('menu')
        menu.parentNode.removeChild(menu)
    }
}