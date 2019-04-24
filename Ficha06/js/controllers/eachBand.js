import {
    getCurrentBand
} from "../models/main.js"

console.log("OLA")
const band = getCurrentBand();

document.querySelector("#titleTxt").innerHTML = band.name
document.querySelector("#bandName").innerHTML = band.name
document.querySelector("#bandGenre").innerHTML = band.genre
document.querySelector("#bandDescription").innerHTML = band.description
document.querySelector("#bandPhoto").src = band.photo
document.querySelector("#bandVideo").src = band.videoclip