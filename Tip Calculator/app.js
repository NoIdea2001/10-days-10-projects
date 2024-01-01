function calculate() {
    const inputnum = parseFloat(document.getElementById("billamt").value) ; 
    const inputpect = parseFloat(document.getElementById("tp").value) ;

    const tipamt = inputnum*(inputpect/100);
    const totamt = inputnum+tipamt;

    const ans1 = document.getElementById("tipamt");
    const ans2 = document.getElementById("totamt");

    ans1.innerHTML = "₹" + tipamt;
    ans2.innerHTML = "₹" + totamt;

}

button = document.getElementById("button");
button.addEventListener("click",calculate);