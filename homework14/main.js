const btn = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const body = document.body;

const closeModal = () => {
    modal.classList.remove('modal--open');
    body.classList.remove('body--fixed');
}

btn.addEventListener('click', () => {
    modal.classList.add('modal--open');
    body.classList.add('body--fixed');
})

modal.addEventListener('click', event => {
    if(event.target && event.target.classList.contains('modal') || event.target.classList.contains('modal__close-btn')) {
        closeModal();
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeModal();
    }
})