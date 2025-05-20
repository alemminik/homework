(function () {
    // header phone
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    const crossButton = document.querySelector('.header__cross');
    const headerTop = document.querySelector('.header__top');
    const header = document.querySelector('.header');

    crossButton.addEventListener('click', (event) => {
        event.preventDefault();
        headerTop.classList.add('header__top--hidden');
        header.style.minHeight = '771px';
    })

    // Modal

    document.addEventListener('click', openModal);
    document.addEventListener('keydown', openModal);

    function openModal(event) {
        const body = document.body;
        const target = event.target;
        const openIcon = target.closest('.modal-btn--open');
        const cancelIcon = target.closest('.modal__cancel');

        if (openIcon) {
            event.preventDefault();
            body.classList.add('body--opened-modal');
        }

        if (body.classList.contains('body--opened-modal') && (cancelIcon ||
            target.classList.contains('modal') || event.key === 'Escape')) {
            event.preventDefault();
            body.classList.remove('body--opened-modal');
        }
    }

    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);

    // Accordion

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        const accordionOpened = document.querySelector('.accordion-list__item--opened .accordion-list__content');
        if (accordionOpened) {
            accordionOpened.style.maxHeight = accordionOpened.scrollHeight + 'px';
        }
        // Это блок для дизайна где есть открытый аккордион изначально

        el.addEventListener('click', (event) => {

            const accordionList = event.currentTarget; // Элемент, на который навесили слушатель
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened'); // Аккордион который открыт
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')  // Его контент

            const accordionControl = event.target.closest('.accordion-list__control--work');
            const accordionControlCheck = event.target.closest('.accordion-list__control');
            if (accordionControlCheck) {
                event.preventDefault();
            }
            if (!accordionControl) return;
            const accordionItem = accordionControl.parentElement; // Выбираем item выше кнопки, аккорион по которому мы тыкнули
            const accordionContent = accordionControl.nextElementSibling; // Выбираем контент ниже кнопки

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) { // Это уже функционал для закрытия другого аккордиона при открытии другого
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                // Записывает полную высоту содержимого, даже если оно скрыто
                // overflow: hidden или max-height: 0

            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });

    // Слайдер для объявлений
    const swiper = new Swiper('.ad__slider', {
    spaceBetween: 15,
    slidesPerView: 1,
    slidesPerGroup: 1, // добавил, чтобы листалось по одному

    navigation: {
        nextEl: '.ad__slider-next',
        prevEl: '.ad__slider-prev',
    },

    breakpoints: {
        501: {
            slidesPerView: 1.45,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        601: {
            slidesPerView: 1.65,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        701: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        801: {
            slidesPerView: 2.2,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },

        901: {
            slidesPerView: 2.75,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        1231: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },

    loop: false,
});

    //Слайдер для работы

    const swiper_2 = new Swiper('.job__slider', {
    spaceBetween: 15,
    slidesPerView: 1,
    slidesPerGroup: 1, // добавил, чтобы листалось по одному

    navigation: {
        nextEl: '.job__slider-next',
        prevEl: '.job__slider-prev',
    },

    breakpoints: {
        501: {
            slidesPerView: 1.45,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        601: {
            slidesPerView: 1.65,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        701: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        801: {
            slidesPerView: 2.2,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },

        901: {
            slidesPerView: 2.75,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        1231: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },

    loop: false,
});


})()