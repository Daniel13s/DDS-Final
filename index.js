function clicar001() {
    var t001 = document.getElementById("t001")
    var popUp = document.createElement("p")
    popUp.setAttribute("id", "popUp1")
    popUp.innerText = "O item tem alguns arranhões mas está funcionando perfeitamente"
    t001.appendChild(popUp)

    t001.addEventListener('mouseout', excluir)
    function excluir() {
        var popUp = document.getElementById("popUp1")
        popUp.parentNode.removeChild(popUp)
    }
}

function clicar002() {
    var t001 = document.getElementById("t002")
    var popUp = document.createElement("p")
    popUp.setAttribute("id", "popUp2")
    popUp.innerText = "Está sem o cabo, mas é de boa qualidade"
    t001.appendChild(popUp)

    t001.addEventListener('mouseout', excluir)
    function excluir() {
        var popUp = document.getElementById("popUp2")
        popUp.parentNode.removeChild(popUp)
    }
}

function clicar003() {
    var t001 = document.getElementById("t003")
    var popUp = document.createElement("p")
    popUp.setAttribute("id", "popUp3")
    popUp.innerText = "Usada poucas vezes"
    t001.appendChild(popUp)

    t001.addEventListener('mouseout', excluir)
    function excluir() {
        var popUp = document.getElementById("popUp3")
        popUp.parentNode.removeChild(popUp)
    }
}