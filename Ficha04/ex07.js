//cria array para os filmes
const movies = []

//atribui o form a uma variavel
const myForm = document.querySelector("form");

//atribui valor maximo do ano que se pode escolher
document.querySelector("#yearTxt").max = new Date().getFullYear();

myForm.addEventListener("submit", function(event) {
    //obtem os valores do form
    const newTitle = document.querySelector("#titleTxt").value;
    const newGenre = document.querySelector("#genreSelect").value;
    const newYear = document.querySelector("#yearTxt").value;
    const newCover = document.querySelector("#coverTxt").value;
    const newTrailer = document.querySelector("#trailerTxt").value;

    //verificar se ja existe o filme
    const result = verifie(newTitle);

    if(result === true) {
        alert("Este filme já existe!");
    } else {
        //nova variavel com a info do novo filme
        const newMovie = {
            title: newTitle,
            genre: newGenre,
            year: newYear,
            cover: newCover,
            trailer: newTrailer
        }

        //adiciona a info do novo filme ao array filmes
        movies.push(newMovie);
    }

    //atualiza a tabela
    refreshTable();

    //previne o envio da informacao para o servidor
    event.preventDefault();
})

//fechar a modal da imagem
const btnCloseCover = document.querySelector("#btnCloseCover");
btnCloseCover.addEventListener("click", function() {
    const dlgCover = document.querySelector("#dlgCover");
    dlgCover.close();
})

//fechar a modal do trailer
const btnCloseTrailer = document.querySelector("#btnCloseTrailer");
btnCloseTrailer.addEventListener("click", function() {
    const dlgTrailer = document.querySelector("#dlgTrailer");
    dlgTrailer.close();
})

//############################################### FUNÇÕES #########################################################

//funcao para verificar se existe o filme
function verifie(newTitle) {
    for(const movie of movies) {
        if(movie.title === newTitle) {
            return true;
        }
    }
    //se não houver da return false
    return false;
}

//funcao para atualizar a tabela
function refreshTable() {
    const table = document.querySelector("table");

    //Cria o cabeçalho na tabela
    table.innerHTML = `
        <tr>
            <th>TITULO</th><th>GÉNERO</th><th>OPÇÕES</th>
        </tr>
    `
    //Adiciona o conteudo de cada filme
    for(const movie of movies) {
        table.innerHTML += `
        <tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
                <button onclick="showCoverWindow('${movie.cover}')">VER CAPA</button>
                <button onclick="showTrailerWindow('${movie.trailer}')">VER TRAILLER</button>
                <button onclick="removeMovie('${movie.title}')">REMOVER</button>
            </td>
        </tr>
        `
    }
}

//funcao para remover filme
function removeMovie(title) {
        for (let i=0; i<movies.length; i++) {
            if(movies[i].title === title) {
                movies.splice(i,1);//remove 1posiçao apartir do elemento i do array
            }
        }
        refreshTable();
}

//funcao para exibir a janela modal da capa
function showCoverWindow(cover) {
    //injetar o link da capa na imagem
    const imgCover = document.querySelector("#imgCover");
    imgCover.src = cover;

    //exibir a janela
    const dlgCover = document.querySelector("#dlgCover");
    dlgCover.showModal();
}

//funcao para exibir a janela modal do trailer
function showTrailerWindow(trailer) {
    //injetar o link do trailer
    const trailerLink= document.querySelector("#linkTrailer");
    trailerLink.src = trailer;

    //exibir a janela do trailer
    const dlgTrailer = document.querySelector("#dlgTrailer");
    dlgTrailer.showModal();
}