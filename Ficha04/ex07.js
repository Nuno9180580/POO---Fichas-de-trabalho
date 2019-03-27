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

        //atualiza a tabela
        refreshTable();
    }
    //previne o envio da informacao para o servidor
    event.preventDefault();
})

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
            <th>TITULO</th><th>GÉNERO</th>
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