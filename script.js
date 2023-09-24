function disableDust() {
    document.querySelector('#dust-1').style.width = '0%';
    document.querySelector('#dust-2').style.width = '0%';
    document.querySelector('#dust-3').style.width = '0%';
    document.querySelector('#dust-4').style.width = '0%';
    document.querySelector('#dust-5').style.width = '0%';
    document.querySelector('#dust-sect').style.setProperty('animation', 'weather-scroll-animation')
    document.querySelector('#dust-sect').style.setProperty('animation-delay', '5s')
    document.querySelector('#dust-sect').style.setProperty('animation-fill-mode', 'forwards')
    document.querySelector('body').style.overflowY = 'visible';
    document.querySelector('#dust-guide').style.display = 'none';
}

function setOverflowHidden() {
    document.querySelector('body').style.overflowY = 'hidden';
}

function scrollToTop() {
    window.scrollTo(0, 0);
    console.log("yes")
}

document.addEventListener("scroll", setBodyScrollPosition);

function setBodyScrollPosition() {
    document.body.dataset.y = window.scrollY
    if (document.body.dataset.y <= 350) {
        document.querySelector('.svg.car').style.setProperty('--position', document.body.dataset.y)
    }

    // console.log(document.body.dataset.y)
}