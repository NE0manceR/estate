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


// ================== gallery ===============

let items = [
    { id: 1, type: "House1", title: "House1", beds: 62, bathrooms: 7, rooms: 11 },
    { id: 2, type: "House2", title: "House2", beds: 63, bathrooms: 6, rooms: 11 },
    { id: 3, type: "House3", title: "House3", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House4", title: "House4", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House5", title: "House5", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House6", title: "House6", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House7", title: "House7", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House8", title: "House8", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House9", title: "House9", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House10", title: "House10", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House11", title: "House11", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House12", title: "House12", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House13", title: "House13", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House14", title: "House14", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House15", title: "House15", beds: 26, bathrooms: 5, rooms: 11 },
    { id: 3, type: "House16", title: "House16", beds: 26, bathrooms: 5, rooms: 11 },
]

let items_wrap = document.querySelector('.list__item-wrap'); // доступ до загального контейнеру
let list__btn = document.querySelector('.list__btn'); // доступ до кнопки
let limit = 6 // початковий ліміт картинок


function addCard(items_limit) {
    items_wrap.innerHTML = ''; // очищає повністью контейнер

    items.forEach(({ type, beds, bathrooms, rooms, title }, index) => {

        if (index < items_limit) { // відмальовує до того індексу який вказаний ліміт
            const card = document.createElement('div'); //створює дів
            card.className = "list__item card"; // вішає на нього rkfcc

            // вставляємо в картку html
            card.innerHTML = `
                <img class="card__img" src="images/card-imgs/1.png" alt="img">
                <span class="card__type">${type}</span>
                <span class="card__title">${title}</span>
                <div class="card__icons-wrap">
                <div>
                    <img class="card__icon" src="images/icons/ic_card.svg" alt="icon">
                    <span class="card__icon-text">16 beds</span>
                </div>
                <div>
                    <img class="card__icon" src="images/icons/ic_card.svg" alt="icon">
                    <span class="card__icon-text">bathrooms</span>
                </div>
                <div>
                    <img class="card__icon" src="images/icons/ic_card.svg" alt="icon">
                    <span class="card__icon-text">11 rooms</span>
                </div>
                </div>
            `
            //  вставляємо наш блок у кінець контейнера
            items_wrap.append(card);
        }
    })
}



list__btn.addEventListener('click', moreCard)

// функція яка показує більше карток
function moreCard() {
    if (limit < items.length) {
        limit += 6;
        console.log(limit, items.length)

        if (limit > items.length) {
            list__btn.innerHTML = 'Show less';
            list__btn.removeEventListener('click', moreCard);
            list__btn.addEventListener('click', lessCard);
        }
        addCard(limit);
    } else {
        return
    }
}

// звертає до 6 карток
function lessCard() {
    limit = 6;
    list__btn.innerHTML = 'Show all listings';
    addCard(limit);
    list__btn.removeEventListener('click', lessCard);
    list__btn.addEventListener('click', moreCard);
}

// перша ініціалізація карток можна змінити ліміт
addCard(limit);




document.addEventListener('DOMContentLoaded', setSize)
window.addEventListener('resize', setSize)


// функція яка задає розмір картинкам зберігаючи пропорцію
function setSize() {

    let imgs = document.querySelectorAll('.card__img');
    let setImgWidth = document.querySelectorAll('.card__img')[0].clientWidth / 100 * 70;

    console.log('resize')
    imgs.forEach((img) => {
        img.style.height = `${setImgWidth}px`
    })
}