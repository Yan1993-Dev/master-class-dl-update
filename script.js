const popup = document.querySelector('.popup')
const openBtn = document.querySelector('.btn-js')
const closeBtn = document.querySelector('.btn-close')


openBtn.addEventListener('click', function() {
    popup.classList.add('open');
})

closeBtn.addEventListener('click', function () {
    popup.classList.remove('open');
})