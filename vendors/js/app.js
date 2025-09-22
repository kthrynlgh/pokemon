let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let seeMoreButton = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextButton.onclick = function() {
    showSlider('next');
}
prevButton.onclick = function() {
    showSlider('prev');
}

let unAcceptClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next','prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        let positionLast = items.length - 1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }

    clearTimeout(unAcceptClick)
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
}


// Animate sections when entering viewport
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        } else {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(50px)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    observer.observe(section);
});