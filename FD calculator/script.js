function calculatematurity() {

    const principle = parseFloat(document.getElementById('principle').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const time = parseFloat(document.getElementById('time').value);
    
    const maturity = principle + (principle*interest*time)/100;
    
    document.getElementById('result').innerText = 'Maturity Amount $' + maturity;
    }
    
    document.getElementById('button').addEventListener('click',calculatematurity);