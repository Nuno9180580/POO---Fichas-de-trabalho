import {
    bands,
    removeBand,
    setCurrentBand,
    sortBands
} from "../models/main.js"

const myCatalog = document.querySelector("#myCatalog")
const btnFilter = document.querySelector("#btnFilter")
const btnSort = document.querySelector("#btnSort")

//botao filter
btnFilter.addEventListener("click", function () {
    const txtName = document.querySelector("#txtName").value
    const sltGenre = document.querySelector("#sltGenre").value
    //chama funcao para renderizar o catalogo com os filtros indicados
    renderCatalog(txtName, sltGenre);
})

// Clique no botão de ordenação
btnSort.addEventListener("click", function () {
    sortBands()
    renderCatalog()
})

//carrega as bandas todas na msm sem filtros
renderCatalog();
//funcao para atualizar as bandas do catalogo
function renderCatalog(filterName = "", filterGenre = "") {
    let result = "";
    let i = 0;
    for (const band of bands) {
        //aplicaçao do filtro
        if ((filterName !== "" && band.name.startsWith(filterName)) || (filterGenre !== "" && band.genre !== filterGenre)) {
            continue;
        }
        //criacao da linha
        if (i % 3 === 0) {
            result += `<div class="row">`
        }

        //geraçao do card
        result += `<div class="col-sm-4">
            <div class="card">
                <img src="${band.photo}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${band.name}</h5>
                    <p class="card-text">${band.genre}</p>
                    <button id="${band.name}" class="btn btn-primary view">Ver mais</button>
                    <button id="${band.name}" class="btn btn-danger remove">Remover</button>                    
                </div>
            </div>
        </div>
    `
        i++;
        if (i % 3 === 0) { //fecha a row
            result += `</div>`
        }
    }
    //atribui os cards ao catalogo
    myCatalog.innerHTML = result

    //associar a funcao ver mais ao botao ver mais de cada card
    const btnSeeMore = document.getElementsByClassName("view")
    for (const elem of btnSeeMore) {
        elem.addEventListener("click", function () {
            setCurrentBand(this.id)
        })
    }

    //associar a funcao remover banda ao botao remover de cada card
    const btnRemove = document.getElementsByClassName("remove")
    for (const elem of btnRemove) {
        elem.addEventListener("click", function () {
            removeBand(this.id)
        })
    }
}