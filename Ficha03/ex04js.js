window.addEventListener("load",function(){
//ALINEA A,I)
//document.querySelector("button").innerHTML = "Clica-me!"

//ALINEA A,II)
//let a1 = document.getElementById("element");
//a.onclick = function () {
//    alert("Olá Mundo!");
//}

//ALINEA A,III)
//document.querySelector("button").addEventListener("click",myFunction);

//function myFunction () {
//    alert("Olá Mundo!");
//}

//ALINEA B
document.querySelector("button").addEventListener("click",myFunction);
document.querySelector("button").addEventListener("mouseup",fimClique);

let caixatxt = document.createElement("input")
caixatxt.type = "text";
let parag = document.createElement("p");
document.body.appendChild(caixatxt);
document.body.appendChild(parag);
caixatxt.addEventListener("keypress",refreshText);

function myFunction () {
    alert(caixatxt.value.length);
}

function refreshText () {
    parag.innerHTML = caixatxt.value;
}

function fimClique () {
    console.log("Obrigado por premir o botão.")
}
})