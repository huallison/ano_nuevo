var button = document.getElementById("button")

var lista = [['RAY', 'CAIXA-DE-CHOCOLATE'], ['LIVIA', 'BEST'], ['ANDERSON', 'ODA-PAL-NO-CU'], ['DEYNIANY', 'MIGA'], 
            ['CAMILA', 'FOGO-NA-COZINHA'], ['VIH', 'YAOI-NAO'], ['NATY', 'NAO-SEJA-TROUXA'], ['KAILANE', 'NAOTEMSENHA']]
button.addEventListener("click", function() {
    enviar(lista)
}) 

var cont = 0

function enviar(lista){
    var valor = document.getElementById("nomeinput").value;
    var valor2 = document.getElementById("senhainput").value
    var nome = [valor, valor2]
    for(let i in lista) {

        if(nome[0].toUpperCase() == lista[i][0] && (nome[1].toUpperCase() == lista[i][1])){
            site = `html/${nome[0].toLowerCase()}.html`
            window.location.href = site
            cont += 1
        }
        else{
            console.log(nome[0], nome[1])
        }
    }

    if(cont == 0){
        alert("LOGIN OU SENHA INCORRETO !!!!")
    }
}
