const daysIn = document.getElementById('day-input');
const monthsIn = document.getElementById('month-input');
const yearsIn = document.getElementById('year-input');
const svgBtn = document.querySelector('.svg-btn');
const yearResults = document.getElementById('year-results');
const monthsResults = document.getElementById('months-results');
const daysResults = document.getElementById('days-results');
const errorMsg = document.querySelectorAll('.error-msg');
const label = document.querySelectorAll('label')

const now = new Date();
let currYear = now.getFullYear();
let currMonths =1 + now.getMonth();
let currDay = now.getDate();

const monthsArr = [31,28,31,30,31,30,31,31,30,31,30,31]
// YEARS ------------------

yearsIn.addEventListener('input', () => {
    if(yearsIn.value.includes('E') || yearsIn.value.includes('e')){
        errorMsg[2].classList.remove('hide');
        errorMsg[2].textContent = 'Must be vaild year';
        yearsIn.classList.add('errBorder');
        label[2].classList.add('errColor');
    } else if(yearsIn.value.length > 4 || yearsIn.value.length < 4){
        errorMsg[2].classList.remove('hide');
        errorMsg[2].textContent = 'Must have 4 characters';
        yearsIn.classList.add('errBorder');
        label[2].classList.add('errColor');
    }else if(yearsIn.value > currYear){
        errorMsg[2].classList.remove('hide');
        errorMsg[2].textContent = 'Must be in the past'
        yearsIn.classList.add('errBorder');
        label[2].classList.add('errColor');
    }else{
        errorMsg[2].classList.add('hide');
        yearsIn.classList.remove('errBorder');
        label[2].classList.remove('errColor');
    }
});

const yearsPassed = () => {
    if(!yearsIn.value){
        errorMsg[2].classList.remove('hide');
        yearsIn.classList.add('errBorder')
        label[2].classList.add('errColor')
    }else if(yearsIn.value.includes('E') || yearsIn.value.includes('e') || yearsIn.value.length > 4 || yearsIn.value > currYear || yearsIn.value < 0){
        yearResults.textContent = '--'
        errorMsg[2].textContent = 'Must be vaild year'
    }
    const year = currYear - yearsIn.value
    yearResults.textContent = year

}

// MONTHS-----------------

monthsIn.addEventListener('input', () => {
    if(monthsIn.value.length > 2){
        errorMsg[1].classList.remove('hide');
        errorMsg[1].textContent = 'Must have 2 characters'
        monthsIn.classList.add('errBorder')
        label[1].classList.add('errColor')
    }else if(monthsIn.value > 12 || monthsIn.value.includes('E') || monthsIn.value.includes('e') ||  monthsIn.value < 0){
        errorMsg[1].classList.remove('hide');
        errorMsg[1].textContent = 'Must be a valid month'
        monthsIn.classList.add('errBorder')
        label[1].classList.add('errColor')
    }else{
        errorMsg[1].classList.add('hide');
        monthsIn.classList.remove('errBorder')
        label[1].classList.remove('errColor')
    }
})

const monthsPassed = () => {
    if(!monthsIn.value){
        errorMsg[1].classList.remove('hide');
        monthsIn.classList.add('errBorder');
        label[1].classList.add('errColor');
    }else if(monthsIn.value.includes('E') || monthsIn.value.includes('e') || monthsIn.value.length > 2 || monthsIn.value > 12 || monthsIn.value < 0){
        monthsResults.textContent = '--'
        errorMsg[1].textContent = 'Must be a valid month'
    }else if (monthsIn.value > currMonths){
        currMonths += 12;
        currYear--
    }

    const months = currMonths - monthsIn.value
    monthsResults.textContent = months

}

// DAYS -----------------

daysIn.addEventListener('input', () => {
    if(daysIn.value.length > 2){
        errorMsg[0].classList.remove('hide');
        errorMsg[0].textContent = 'Must have 2 characters';
        daysIn.classList.add('errBorder');
        label[0].classList.add('errColor');
    }else if( daysIn.value < 0 || daysIn.value > 31 || daysIn.value.includes('E') || daysIn.value.includes('e')){
        errorMsg[0].classList.remove('hide');
        errorMsg[0].textContent = 'Must be a valid day';
        daysIn.classList.add('errBorder');
        label[0].classList.add('errColor');
    }else{
        errorMsg[0].classList.add('hide');
        daysIn.classList.remove('errBorder');
        label[0].classList.remove('errColor');
    }
})

const daysPassed = () => {
    if(!daysIn.value){
        errorMsg[0].classList.remove('hide');
        daysIn.classList.add('errBorder');
        label[0].classList.add('errColor');
    }else if(daysIn.value > currDay){
        currDay += monthsArr[currMonths - 1]
        currMonths--
    }else if(daysIn.value.includes('E') || daysIn.value.includes('e') || daysIn.value.length > 2 || daysIn.value > 31 || daysIn.value < 0){
        daysResults.textContent = '--'
        errorMsg[0].textContent = 'Must be a valid day';
        errorMsg[0].classList.remove('hide');
        daysIn.classList.add('errBorder');
        label[0].classList.add('errColor');
    }
    const days = currDay - daysIn.value;
    daysResults.textContent = days

}


svgBtn.addEventListener('click', () => {
    yearsPassed();
    monthsPassed();
    daysPassed();
    document.querySelectorAll('input').forEach(input => {
        if(!input.value){
            daysResults.textContent = '--';
            monthsResults.textContent = '--';
            yearResults.textContent = '--';
        }
    })
})


