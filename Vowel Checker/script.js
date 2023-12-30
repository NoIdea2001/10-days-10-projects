function check(){
    let textin = document.getElementById("textin").value;
    var count = 0;

    textin = textin.toLowerCase();

    for (let index = 0; index < textin.length; index++) {
        
        var char = textin.charAt(index);
        if (isVowel(char)) {
            count += 1;
        }
        
    }
    var result = document.getElementById("result");
    result.innerHTML = "Total Vowels: " + count;
}


function isVowel(char) {
    var vowels = ["a","e","i","o","u"];
    return vowels.includes(char);
}

var button = document.getElementById("button");
button.addEventListener("click",check);