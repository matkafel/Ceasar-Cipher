import cesar13 from './cesar13';

const submitBtn = document.querySelector('.mainPassword-submit');
const inputTxt = document.querySelector('.mainPassword-input');
const output = document.querySelector('.output')


submitBtn.addEventListener('click', e => {
    e.preventDefault();
    output.innerHTML = cesar13(inputTxt.value);
})




