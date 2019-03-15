//Alinea A
const a1 = document.createElement("table");
const a2 = document.createElement("tr");
const a3 = document.createElement("th");
const a4 = document.createElement("th");

const a5 = document.createElement("tr");
const a6 = document.createElement("td");
const a7 = document.createElement("td");

const text1 = document.createTextNode("Escola");
const text2 = document.createTextNode("Local");
const text3 = document.createTextNode("ESMAD");
const text4 = document.createTextNode("Vila do Conde");
a1.appendChild(a2);
a1.appendChild(a5);

a2.appendChild(a3);
a2.appendChild(a4);

a3.appendChild(text1);
a4.appendChild(text2);

a5.appendChild(a6);
a5.appendChild(a7);

a6.appendChild(text3);
a7.appendChild(text4);
document.body.appendChild(a1);

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

//ALINEA E
const remove1 = document.getElementsByTagName("tr");
const remove2 = document.getElementsByTagName("th");
remove1.removeChild(remove2);


