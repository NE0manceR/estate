let mobile_btn = document.querySelector('.burger-menu');
let mobile_menu = document.querySelector('.mobile-menu');
let slider__btn = document.querySelectorAll('.slider__btn');
let slider__photo = document.querySelector('.slider__main-photo');

mobile_btn.addEventListener('click', toggle_mobile_menu);
mobile_menu.addEventListener('click', (e) => {
    toggle_mobile_menu(e);
});

slider__btn.forEach(element => {
    element.addEventListener('click', () => {
        setSliderImg(element, slider__btn);
    });
});


function toggle_mobile_menu(e) {
    if (e.target.classList.contains('show-menu')) {
        mobile_menu.classList.add('remove-menu');
        setTimeout(() => {
            mobile_menu.classList.remove('remove-menu');
            mobile_menu.classList.remove('show-menu');
        }, 300)
    } else {
        mobile_menu.classList.add('show-menu');
    }
}

function setSliderImg(el, element_list) {
    let idForImg = el.getAttribute('id')

    element_list.forEach(element => {
        element.classList.remove('active');
    });

    el.classList.add('active');
    slider__photo.setAttribute('src', `images/${idForImg}.jpg`)
    console.log();
}