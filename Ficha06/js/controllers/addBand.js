import Band from "../models/band.js"
import {
    addBand
} from "../models/main.js"

const myForm = document.querySelector("#myForm")

myForm.addEventListener("submit", function (event) {
    //obter os valores dos campos de texto
    const txtName = document.querySelector("#nameTxt").value
    const genreSlt = document.querySelector("#sltGenre").value
    const txtInfo = document.querySelector("#infoTxt").value
    const txtImg = document.querySelector("#imgLink").value
    const txtVideo = document.querySelector("#vdLink").value

    addBand(txtName, genreSlt, txtImg, txtInfo, txtVideo)
    event.preventDefault();
})