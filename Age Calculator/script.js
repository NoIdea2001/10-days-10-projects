button = document.getElementById("button") ;

function start() {
    const DOBin = document.getElementById("datein");
    const result = document.getElementById("output");
    const dob = new Date(DOBin.value);
    const AgeinMs = Date.now() - dob.getTime();
    const Agedate = new Date(AgeinMs);
    const Age = Math.abs(Agedate.getUTCFullYear() - 1970);

    result.innerHTML = "Your Age is " + Age + " years.";
}

button.addEventListener("click",start);