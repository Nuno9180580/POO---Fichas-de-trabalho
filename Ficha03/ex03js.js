//criar tabela
const createTable = document.createElement("table");
//table row
const tr1 = document.createElement("tr");
const tr2 = document.createElement("tr");
//table header
const th1 = document.createElement("th");
const th2 = document.createElement("th");
//table d...
const td1 = document.createElement("td");
const td2 = document.createElement("td");
//textos
const txt1 = document.createTextNode("escola")
const txt2 = document.createTextNode("local")
const txt3 = document.createTextNode("ESMAD ")
const txt4 = document.createTextNode("Vila do Conde")
//texto para o lugar
th1.appendChild(txt1)
th2.appendChild(txt2)
td1.appendChild(txt3)
td2.appendChild(txt4)
//preencher table rows
tr1.appendChild(th1);
tr1.appendChild(th2);
tr2.appendChild(td1)
tr2.appendChild(td2)
//adicionar table rows a tabela
createTable.appendChild(tr1);
createTable.appendChild(tr2);
//adicionar ao documento
document.body.appendChild(createTable);

//ALINEA B
const header1 = "Escola"
const header2 = "Local"
const text01 = "ESMAD"
const text02 = "Vila do Conde";
const myTable = document.createElement("table");

myTable.innerHTML += `<tr><th>${header1}</th><th>${header2}</th></tr> <tr><td>${text01}</td><td>${text02}</td></tr>`
document.body.appendChild(myTable);

//ALINEA C
myTable.innerHTML +=`<tr><td>ISEP</td><td>Porto</td></tr>`

//ALINE D
let rows = document.querySelectorAll("td");
for(let each of rows){
    if(each.innerHTML==="ESMAD")
    {
        each.innerHTML = "Vila do Conde/Povoa de Varzim";
    }
}

//ALINEA E
const e1 = document.querySelector("table")
const e2 = document.querySelector("tr:first-of-type");
e1.removeChild(e2);