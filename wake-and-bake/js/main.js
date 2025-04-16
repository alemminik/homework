(function() {
    document.addEventListener('click', burgerInit);

    function burgerInit(event) {
        const target = event.target;
        const burgerIcon = target.closest('.burger-icon') // Провреряет есть ли родитель с классом burger-icon
        const burgerNavLink = target.closest('.nav__link'); // Вернет сам элемент если его указать

        if (document.documentElement.clientWidth > 900) { // Если ширина больше 900 прерываем функцию
            return;
        };

        if(!burgerIcon && !burgerNavLink) return;

        
        document.body.classList.toggle('body--opened-menu');
    }
})()