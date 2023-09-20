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
}

function setOverflowHidden() {
    document.querySelector('body').style.overflowY = 'hidden';
}

function scrollToTop() {
    window.scrollTo(0, 0);
    console.log("yes")
}