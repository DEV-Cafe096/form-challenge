const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.text-input')


form.addEventListener('submit',(event) =>{
event.preventDefault()

inputs.forEach(input => {
    console.log(        input.nextElementSibling
    );
    if(input.value == ''){
        input.classList.add('border-required')
        input.nextElementSibling.style.display='block'
    }else{
        input.classList.add('border-input')
        input.classList.remove('border-required')
        input.nextElementSibling.style.display='none'

    }

});


})