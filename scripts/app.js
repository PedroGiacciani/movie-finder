//ARQUIVO QUE CONECTA TODOS OS EVENTOS E CLASSES

//IMPORTAÇÕES
import { pesquisarFilme } from "./eventos.js"

//Váriaveis 
let inputNomeFilme = document.getElementById('inome-filme')
let btnPesquisa = document.getElementById('btn-pesquisa')
let areaCard = document.getElementById('area-card-filme')

inputNomeFilme.addEventListener('keypress', (event) => {
    if(event.key == 'Enter'){
        pesquisarFilme(inputNomeFilme.value, areaCard)
        inputNomeFilme.value = ``
        inputNomeFilme.focus()
    }
})

btnPesquisa.addEventListener('click', () => {
    pesquisarFilme(inputNomeFilme.value, areaCard)
    inputNomeFilme.value = ``
    inputNomeFilme.focus()
})