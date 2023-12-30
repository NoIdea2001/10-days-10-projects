const lowercasechar = "abcdefghijklmnopqrstuvwxyz";
const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_+`-={}|[]\\;':\"<>?,./";

let lenghtin = document.getElementById("Length");
let lowercasein = document.getElementById("Lowercase");
let uppercasein = document.getElementById("Uppercase");
let numbersin = document.getElementById("Numbers");
let symbolsin = document.getElementById("Symbols");
let generatein = document.getElementById("Generate");
var output = document.getElementById("pass");

function start() {
    const length = lenghtin.value;
    let character="";
    let password="";

    if(lowercasein.checked){
        character+=lowercasechar;
    }

    if(uppercasein.checked){
        character+=uppercasechar;
    }

    if(numbersin.checked){
        character+=numbers;
    }

    if(symbolsin.checked){
        character+=symbols;
    }

    for (let index = 0; index < length; index++) {
        password+= character.charAt(Math.floor(Math.random()*character.length)); 
    }
    output.innerHTML = password;
}

generatein.addEventListener("click",start);

