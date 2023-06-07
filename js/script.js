"use strict";

/*-----------АККОРДЕОН --------------*/
let acc = document.querySelectorAll('.accordeon');

document.querySelectorAll('.title').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;
        console.log(content)

        if (content.style.maxHeight) {
            const padd = el.nextElementSibling;
            padd.classList.toggle('pad');
            document.querySelectorAll('.info').forEach((el) => el.style.maxHeight = null);
            document.querySelectorAll('.pad').forEach((el) => el.classList.remove('pad'));
        } else {
            document.querySelectorAll('.pad').forEach((el) => el.classList.remove('pad'));
            const padd = el.nextElementSibling;
            padd.classList.toggle('pad');
            document.querySelectorAll('.info').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 100 + 'px';
        }
    })
});

/*-------------МОДАЛЬНОЕ ОКНО-------------------*/

const modal = document.getElementById('modal');
console.log(modal)
/* находим кнопки, открывающие модальное окно */
const modalOpen = document.querySelector('.modal_open');
console.log(modalOpen)
/* находим кнопку, закрывающие модальное окно */
const modalClose = document.querySelector('.modal__close');
console.log(modalClose)

modalOpen.addEventListener('click', function () {
    /*ДОБАВЛЕНИЕ КЛАССА, ЧТОБЫ УБРАТЬ display none */
    modal.classList.add('modal__active');
    
    /*ПРОСЛУШКА КНОПКИ ЗАКРЫТИЯ ОКНА */
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal__active');
    });
    /*УДАЛЯЕМ ПРОСЛУШКУ*/
    modalClose.removeEventListener('click', () => {
        modal.classList.remove('modal__active');
    });

});

/*----------ФИЛЬТРАЦИЯ----------------*/

// const filterBox = document.querySelectorAll('.furniture')

// document.querySelector('.filtr').addEventListener('click', even => {
//     let filterClass = even.target.dataset['f'];
//     console.log(filterClass)
//     console.log(filterBox)

//     filterBox.forEach(elem => {
//         elem.classList.remove('hide');
//         if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
//             elem.classList.add('hide');
//         }    
//     });
// });
const list = document.querySelector('.list'),
    items = document.querySelectorAll('.furniture');
console.log(items)
console.log(list)
function fliter() {
    list.addEventListener('click', event => {

        const targetId = event.target.dataset.id;
        console.log(targetId);

        switch(targetId) {
            case 'all':
                getItems('furniture')
                break;

            case 'chair':
                getItems(targetId);
                break;

            case 'bed':
                getItems(targetId);
                break;

            case 'wardrobe':
                getItems(targetId);
                break;

            case 'sofa':
                getItems(targetId);
                break;
                
            
        }
    });
}
fliter();

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

/*------------------------------------СЛАЙДЕР-------------------------------- */
let slideIndex = 1,
        slides = document.querySelectorAll('.client'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.sliderNew-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);
function showSlides (n) {
    if (n > slides.length) {
        // Возвращаемся к первому слайду
        slideIndex = 1;
    }
    if (n < 1) {
        // Возвращаемся к последнему слайду
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(n) {
    showSlides(slideIndex += n); 
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) {
    // перебираем все dot и узнаем на какую именно кликнули
    for (let i = 0; i < dots.length + 1; i++) {
        // проверяем элемент на соответствие и узнаем номер точки
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
}); 

//-----------------------Табы------------------//

let tab = document.querySelectorAll('.headertab'),
        info = document.querySelector('.infor-header'),
        tabContect = document.querySelectorAll('.infor-tabcontent');

function hideTabContect(a) {
    for (let i = a; i < tabContect.length; i++) {
        tabContect[i].classList.remove("show");
        tabContect[i].classList.add("hide");
    }
}
hideTabContect(1);

function ShowTabContect(b) {
    if (tabContect[b].classList.contains('hide')){
        tabContect[b].classList.remove("hide");
        tabContect[b].classList.add("show");
    }
}


info.addEventListener('click', function (event) {
    let target = event.target;

    if (target && target.classList.contains('headertab')){
        // Связь элементов при совпадении target
        for(let i =0; i < tab.length; i++){
            //если совпадают
            if (target == tab[i]){
                //Скрываем все табы
                hideTabContect(0);
                // удаляем класс активности таба
                tab.forEach(item => {
                item.classList.remove('activ');
                });
                //элементу target(на который кликнули) добавляем активный класс 
                target.classList.add('activ');
                
                //Совпадение по нумерации
                ShowTabContect(i);
                
                break
            } 
        }
    }
});

//---------------------БУРГЕР------------------------//
// let burg = document.querySelector('.burger-btn');
// burg.addEventListener("click", function() {
//     document.querySelector.menu.classList.toggle("open");
// })

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".burger-btn").addEventListener("click", function() {
        document.querySelector('.menu').classList.toggle("open")
    })
})