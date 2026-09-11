//ARQUIVO QUE GERA OS PRINCIPAIS EVENTOS

//IMPORTAÇÕES
import { Filme } from "./filme.js";

//c4c6f348

export function pesquisarFilme(nomeFilme, areaCard){
    let espera = document.createElement('p')
    espera.textContent = `Pesquisando...`
    areaCard.appendChild(espera)
    fetch(`http://www.omdbapi.com/?apikey=c4c6f348&t=${nomeFilme}`)
    .then((response) => response.json())
    .then((lista) => {
        if(lista.Title == undefined){
            throw new Error('Título não encontrado. Verifique a ortografia do nome e tente novamente!')    
        }else{
            areaCard.innerHTML = ``
            const filme = new Filme(lista.Title, lista.Released, lista.imdbRating, lista.Runtime, lista.Plot, lista.Poster, lista.Genre, lista.Director)
            mostrarCardFilme(filme, areaCard)
            console.log(filme)            
        }

    })
    .catch((erro) => {
        espera.textContent = `${erro}`
    })
}

function mostrarCardFilme(filme, areaCard){
    let cardFilme = document.createElement('div')
    cardFilme.setAttribute('id', 'card-filme')

    let cardPoster = document.createElement('div')
    cardPoster.setAttribute('id', 'card-poster')
    let cardInfo = document.createElement('p')
    cardInfo.setAttribute('id', 'card-info')

    let poster = document.createElement('img')
    poster.setAttribute('src', filme.poster)
    poster.setAttribute('alt', `${filme.nome} poster`)
    cardPoster.appendChild(poster)

    cardInfo.innerHTML = `
        <strong>Título:</strong> ${filme.nome} <br>
        <strong>Lançado em:</strong> ${filme.ano} <br>
        <strong>Gênero:</strong> ${filme.genero} <br>
        <strong>Diretor:</strong> ${filme.diretor} <br>
        <strong>Nota IMDB:</strong> ${filme.imdb} <br>
        <strong>Duração:</strong> ${filme.duracao} <br>
        <strong>Sinopse:</strong> ${filme.plot}
    `  

    cardFilme.appendChild(cardPoster)
    cardFilme.appendChild(cardInfo)
    areaCard.appendChild(cardFilme)
}