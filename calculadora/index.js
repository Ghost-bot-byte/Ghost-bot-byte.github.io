const inputCalculator = document.getElementById('input-calculator');

function buttonBackground() {
    document.body.classList.toggle('is-black');
    document.getElementById('h1').classList.toggle('is-black')
    document.getElementById('hr').classList.toggle('hr-white')
    document.getElementById('section').classList.toggle('section-white')
}

function appendToDisplay(button) {
    inputCalculator.value += button.textContent;
}

function buttonDelete() {
    const inputCalc1 = document.getElementById('input-calculator').value  = ''
}

function buttonIgual() {    
        const expression = inputCalculator.value;
        if (expression) {
            try {
                // Avalia a expressão matemática e exibe o resultado
                const result = eval(expression);
                inputCalculator.value = result;
            } catch (error) {
                // Em caso de erro, exibe "Erro"
                inputCalculator.value = "Erro"

        
            }
        }
    }





