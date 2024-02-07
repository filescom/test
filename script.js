let resultCalc = document.querySelector('#result__calc');
let inputCalc = document.querySelector('#input__calc');
let btnSum = document.querySelector('#btn__sum');

btnSum.addEventListener('click', function(){
    inputCalc.value = resultCalc.value;
    
})