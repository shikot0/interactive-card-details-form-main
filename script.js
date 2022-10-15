const cardholderInput = document.getElementById('cardholder-name-input');
const cardholderOutput = document.getElementById('cardholder-name-output');
const cardNumberInput = document.getElementById('card-number-input'); 
const cardNumberOutput = document.getElementById('card-number-output');
const expiryMonthInput = document.getElementById('expiry-month-input');
const expiryYearInput = document.getElementById('expiry-year-input');
const expiryDateOutput = document.getElementById('expiry-date-output')
const cvcInput = document.getElementById('cvc-input');
const cvcOutput = document.getElementById('cvc-output');
const submitBtn = document.getElementById('submitBtn'); 
const form = document.querySelector('form'); 
const completionMessage = document.getElementById('completion-message');
const continueBtn = document.getElementById('continue-button'); 

const inputs = [cardholderInput,cardNumberInput,expiryMonthInput,expiryYearInput,cvcInput];

cardholderInput.addEventListener('input', () => {
    cardholderOutput.innerText = cardholderInput.value; 
    if(cardholderInput.value == '') {
        cardholderOutput.innerText = `Jane Appleseed`;   
    } 
}); 

cardNumberInput.addEventListener('input', () => {
    cardNumberOutput.innerText = `${cardNumberInput.value.slice(0, 4)} ${cardNumberInput.value.slice(4, 8)} ${cardNumberInput.value.slice(8, 12)} ${cardNumberInput.value.slice(12, 16)}`;  
    if(cardNumberInput.value == '') {     
        cardNumberOutput.innerText = `0000 0000 0000 0000`;   
    }
});


expiryMonthInput.addEventListener('input', () => {
    if(expiryMonthInput.value == '' && expiryYearInput.value !== '') { 
        expiryDateOutput.innerText = `00/${expiryYearInput.value}`;    
    }else if(expiryMonthInput.value == '' && expiryYearInput.value == '') {
        expiryDateOutput.innerText = `00/00`;     
    }else if(expiryMonthInput.value != '' && expiryYearInput.value == '') {
        expiryDateOutput.innerText = `${expiryMonthInput.value}/00`
    }else if(expiryMonthInput.value != '' && expiryYearInput.value != ''){
        expiryDateOutput.innerText = `${expiryMonthInput.value}/${expiryYearInput.value}`; 
    }
    if(expiryMonthInput.value > 12) {
        console.log('invalid') 
    }
});

expiryYearInput.addEventListener('input', () => {
    if(expiryYearInput.value == '' && expiryMonthInput.value !== '') {   
        expiryDateOutput.innerText = `${expiryMonthInput.value}/00`;    
    }else if(expiryMonthInput.value == '' && expiryYearInput.value == '') { 
        expiryDateOutput.innerText = `00/00`;     
    }else if(expiryYearInput.value != '' && expiryMonthInput.value == '') { 
        expiryDateOutput.innerText = `00/${expiryYearInput.value}` 
    }else if(expiryMonthInput.value != '' && expiryYearInput.value != ''){
        expiryDateOutput.innerText = `${expiryMonthInput.value}/${expiryYearInput.value}`; 
    } 
});

cvcInput.addEventListener('input', () => {
    cvcOutput.innerText = cvcInput.value; 
    if(cvcInput.value == '') {
        cvcOutput.innerText = `000`;   
    }
});

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    inputs.forEach(input => {
        if(input.value == '') { 
            input.parentElement.setAttribute('id', 'blank-value');
            input.setAttribute('id', 'invalid'); 
        }else if(input.validity.patternMismatch) {    
            input.parentElement.setAttribute('id', 'invalid-input'); 
            input.setAttribute('id', 'invalid');
        }else {
            input.parentElement.removeAttribute('id', 'invalid-input');  
            input.removeAttribute('id', 'invalid');
        }
    })
    if(form.checkValidity()) {
        form.setAttribute('id', 'hidden');
        completionMessage.classList.add('visible');  
    }
    console.log(form.checkValidity());   
})

continueBtn.addEventListener('click', () => { 
    form.removeAttribute('id');
    completionMessage.classList.remove('visible');  
})