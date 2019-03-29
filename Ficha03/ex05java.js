const myForm = document.querySelector("form");

//array para os jogos
const games = [];

myForm.addEventListener("submit", function (event) {
    //verificar se o jogo esta entre as datas pedidas
    const yearGame = document.querySelector("#yearTxt").value;
    const dateMax = new Date().getFullYear();

    if(yearGame > 1950 && yearGame<dateMax)
    {        
        //obter as informaçoes inseridas
        const nameTxt = document.querySelector("#nameTxt").value;
        const yearTxt = document.querySelector("#yearTxt").value;
        const genreTxt = document.querySelector("#genreSelect").value;
        const coverTxt = document.querySelector("#coverTxt").value;
        
        //variavel com as informaçoes a adicionar ao array
        const gameAdd = {
            title: nameTxt,
            year: yearTxt,
            genre: genreTxt,
            cover: coverTxt
        }
        //adiciona a info dde cima ao array
        games.push(gameAdd);

        //atualiza a tabela
        refreshTable();
        //alertar o adicionar
        alert("Validação OK")
        nameTxt = "";
        yearTxt = "";
        //prevenir a submissao do formulario
        event.preventDefault();
    }
    else {
        alert("ERRO!")
    }
})


//****************************************FUNÇÕES******************** */


function refreshTable() {
    //obter tabela
    const myTable = document.querySelector("table");
    myTable.border="1";

    //cria denovo o cabeçalho
    myTable.innerHTML = `
        <tr>
        <th>Nome</th>
        <th>Ano</th>      
        <th>Género</th>
        <th>Capa</th>
        <th>Opções</th>
        </tr>
    `
    for (const game of games) {
        //adicionar a tabela
    myTable.innerHTML += `
    <tr>
        <td>${game.title}</td>
        <td>${game.year}</td>
        <td>${game.genre}</td>
        <td>${game.cover}</td>
        <td><input onclick="removeGame('${game.title}')" type="button" value="X">
    </tr>
    `
    }
}

//botao remover
function removeGame(title) {
    for (let i=0; i<games.length; i++) {
        if(games[i].title === title) {
            games.splice(i,1);//remove 1posiçao apartir do elemento i do array
        }
    }
    refreshTable();
}