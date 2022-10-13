const numbers = document.querySelectorAll('.numbers div label input');
const submit = document.getElementById('submit');
const submit2 = document.getElementById('submit2');
const selection = document.getElementById('container__selection');
const rating = document.getElementById('container__rating');

submit.style.display = 'none'
submit2.style.display = 'block'

submit.addEventListener('click', () => {
    numbers.forEach(element => {
        let value = element.value
        if (element.checked) {
            document.getElementById('text').innerHTML = `You selected ${value} out of 5`;
            rating.style.display = 'none';
            selection.style.display = 'flex'
        } else {
            element.addEventListener('change', () => {
                submit.style.display = 'block';
                submit2.style.display = 'none';
            })
        }
    });
})

numbers.forEach(element => {
    element.addEventListener('change', () => {
        submit.style.display = 'block';
        submit2.style.display = 'none';
    })
});