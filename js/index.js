function calculateBMI(form) {
    
    let result = document.getElementById('result');
    let img = document.getElementById('img')
    let age = form.age.value
    let imc = form.weight.value / (form.height.value**2) ;
    let imcText;
    

    function peoplerOver60() {
        let moreThan60 = age >= 60
        if (imc <= 21.9 && moreThan60) imcText = 'Abaixo do peso'
        if (imc > 22 && imc <= 26.9 && moreThan60) imcText = 'Peso adequado'
        if (imc > 27 && moreThan60)  imcText = 'Acimado peso'

        result.innerHTML = `Resultado: ${parseFloat(imc).toFixed(2)}  ${imcText}`;  
    }

    function peopleUnder60() {
        let lessThan60 = age < 60 
        if (imc <= 16.90 && lessThan60) imcText = 'Muito abaixo do peso'
        if (imc > 17 && imc <= 18.4 && lessThan60) imcText = 'Abaixo do peso'
        if (imc >= 18.5 && imc <= 24.9 && lessThan60) imcText = 'Peso adequado'
        if (imc >= 25 && imc <= 29.9 && lessThan60)  imcText = 'Acima do peso'
        
        result.innerHTML = `Resultado: ${parseFloat(imc).toFixed(2)}  ${imcText}`; 
    }

    function obesity() {
        
        if (imc >= 30 && imc <= 34.9) {
            imcText = 'Obesidade grau 1' 
            imgObesity()
        }else if (imc >= 35 && imc < 40) {
            imcText = 'Obesidade grau 2'
            imgObesity()
        }else if (imc > 40) {
            imcText = 'Obesidade grau 3'
            imgObesity()
        } 

        result.innerHTML = `Resultado: ${parseFloat(imc).toFixed(2)}  ${imcText}`;
    }

    function imgObesity() {
        document.getElementById("img").src="img/imgObesity.gif"
        
    }

    
    peoplerOver60()
    peopleUnder60()
    obesity()
    
    
    return false
}