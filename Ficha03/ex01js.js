//ALINEA B
let b = document.getElementById("p2");
console.log(b);

//ALINEA C
let c = document.getElementsByTagName("p");
console.log(c);

//ALINEA D
let d = document.querySelectorAll("p");
for(let x of d)
    {
        console.log(x.innerHTML);
    }

//ALINEA E
let e = document.getElementsByClassName("red");
console.log(e);

// ALINEA F
let f = document.querySelectorAll("p#p3");
console.log(f);

//ALINEA G
let g = document.querySelectorAll("p,div");
    for(let element of g)
    {
        console.log(element.innerHTML); 
    }

//ALINEA H
let h = document.querySelectorAll("span");
    for(let hx of h)
    {
        console.log(hx.innerHTML);
    }

//ALINEA I
let i = document.querySelector("div span").innerHTML;
console.log(i);

//ALINEA J
let j = document.querySelector("body>span").innerHTML;
    console.log(j);
