(function () {
    document.addEventListener('click', burgerInit);

    function burgerInit(event) {
        const target = event.target;
        const burgerIcon = target.closest('.burger-icon') // Провреряет есть ли родитель с классом burger-icon
        const burgerNavLink = target.closest('.nav__link'); // Вернет сам элемент если его указать

        if (document.documentElement.clientWidth > 900) { // Если ширина больше 900 прерываем функцию
            return;
        };

        if (!burgerIcon && !burgerNavLink) return;


        document.body.classList.toggle('body--opened-menu');
    }

    document.addEventListener('click', openModal);
    document.addEventListener('keydown', openModal);

    function openModal(event) {
        const body = document.body;
        const target = event.target;
        const giftIcon = target.closest('.about__img-button');
        const cancelIcon = target.closest('.modal__cancel');

        if (giftIcon) {
            event.preventDefault();
            body.classList.add('body--opened-modal');

        }

        if (body.classList.contains('body--opened-modal') && (cancelIcon ||
            target.classList.contains('modal') || event.key === 'Escape')) {
            event.preventDefault();
            body.classList.remove('body--opened-modal');
        }
    }
})()
