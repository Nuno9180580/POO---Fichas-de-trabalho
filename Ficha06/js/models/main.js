import Band from "./band.js"
import User from "./user.js"

//Array de bandas
export let bands = []

// Caso já exista uma chave bands na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Band inseridos manualmente
if (localStorage.bands) {
    bands = JSON.parse(localStorage.bands)
} else {
    const band1 = new Band("Muse", "Pop-Rock", "https://images-na.ssl-images-amazon.com/images/I/C1DCeELLbkS._CR0,0,3840,2880_._SL1000_.jpg", "", "")
    const band2 = new Band("Radiohead", "Pop-Rock", "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/radiohead_hero_688547436.jpg?itok=tcnCxZ6t", "", "")
    const band3 = new Band("Metalica", "Pop-Rock", "https://www.rollingstone.com/wp-content/uploads/2018/09/metallica-whiskey.jpg?crop=900:600&width=440", "", "")
    const band4 = new Band("James", "Pop-Rock", "https://cdn1.sabado.pt/images/2015-02/img_797x448$2015_02_25_14_31_57_110726.jpg", "", "")
    const band5 = new Band("James", "Pop-Rock", "https://images-na.ssl-images-amazon.com/images/I/C1DCeELLbkS._CR0,0,3840,2880_._SL1000_.jpg", "", "")
    bands.push(band1, band2, band3, band4, band5)
}

//Array de utilizadores
export const users = []

// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente
if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    const user1 = new User("ricardo", "12345")
    const user2 = new User("maria", "9876")
    const user3 = new User("pedro", "54321")
    users.push(user1, user2, user3)
}

//funcao para adicionar banda
export function addBand(txtName, genreSlt, txtImg, txtInfo, txtVideo) {
    let bandExists = false;
    for (const band of bands) {
        if (band.name === txtName) {
            bandExists = true;
        }
    }

    if (bandExists === false) {
        console.log("feito")
        bands.push(new Band(txtName, genreSlt, txtImg, txtInfo, txtVideo))
        localStorage.setItem("bands", JSON.stringify(bands))
        alert(`Banda ${txtName} criada com sucesso!`)
        //redireciona para a pagina inicial
        window.location.href = "/Ficha06/index.html"
    } else {
        alert(`Banda ${txtName} já existe!`)
    }
}

//funcaoo para ordenar as bandas
export function sortBands() {
    bands.sort(Band.compare)
    localStorage.setItem("bands", JSON.stringify(bands))
}
//funcao para remover a banda
export function removeBand(txtName) {
    for (let i = 0; i < bands.length; i++) {
        if (bands[i].name === txtName) {
            bands.splice(i, 1)
        }
    }
    localStorage.setItem("bands", JSON.stringify(bands))
    location.reload()
}

//funcao que obtem o nome da banda e definea para ser exibida
export function setCurrentBand(txtName) {
    localStorage.setItem("band", txtName)
    location.href = "/Ficha06/html/band.html"
}

export function getCurrentBand() {
    const band = localStorage.getItem("band")
    for (let i = 0; i < bands.length; i++) {
        if (bands[i].name === band) {
            return bands[i]
        }
    }
}