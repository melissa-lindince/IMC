function calculateImc(form) {
    
    let result = document.querySelector('.result');
    let imc = form.weight.value / (form.height.value**2) ;
    let imcText;
  
    if (imc <= 16.90) imcText = 'Muito abaixo do peso';
    if (imc > 17 && imc <= 18.4) imcText = 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) imcText = 'Peso normal';
    if (imc >= 25 && imc <= 29.9)  imcText = 'Acima do peso';
    if (imc >= 30 && imc <= 34.9) imcText = 'Obesidade grau 1'
    if (imc >= 35 && imc < 40)  imcText = 'Obesidade grau 2'
    if (imc > 40) imcText = 'Obesidade grau 3'
   
    result.innerHTML = `Resultado: ${imc.toFixed(2)}  ${imcText}`;
    return false
}