function disableDust() {
    document.querySelector('#dust-1').style.width = '0%';
    document.querySelector('#dust-2').style.width = '0%';
    document.querySelector('#dust-3').style.width = '0%';
    document.querySelector('#dust-4').style.width = '0%';
    document.querySelector('#dust-5').style.width = '0%';
    // document.querySelector('#dust-sect').style.setProperty('animation', 'weather-scroll-animation')
    // document.querySelector('#dust-sect').style.setProperty('animation-delay', '5s')
    // document.querySelector('#dust-sect').style.setProperty('animation-fill-mode', 'forwards')
    document.querySelector('#dust-sect').style.setProperty('opacity', '50%')
    document.querySelector('body').style.overflowY = 'visible';
    document.querySelector('#dust-guide').style.display = 'none';
    document.querySelector('#dust-sect:hover').style.cursor = 'default';
    document.querySelector('#dust-sect').style.setProperty('z-index', '-1')
}

function setOverflowHidden() {
    document.querySelector('body').style.overflowY = 'hidden';
}

function scrollToTop() {
    window.scrollTo(0, 0);
    console.log("yes")
}

document.addEventListener("scroll", setBodyScrollPosition);
number = 0
function setBodyScrollPosition() {
    document.body.dataset.y = window.scrollY
    document.body.dataset.h = window.innerHeight
    if ((document.body.dataset.y * 10 - 7630) <= 11370) {

        document.querySelector('#increasing-num').innerHTML = (document.body.dataset.y * 10 - 7630).toLocaleString("en-US") + ",000"
    }
    else if (document.body.dataset.y > 1900) {
        document.querySelector('#increasing-num').innerHTML = "11,370,000"
    }
    let top = document.querySelector('#personal-car-bad-sect').getBoundingClientRect().top
    let topWithOffset = top - parseInt(document.body.dataset.h)
    if (topWithOffset < 0) {
        document.querySelector('#pcbs-text').style.setProperty('--move', 1)
        document.querySelector('#pcbs-image').style.setProperty('--move', 120)
    }
    if (100 - (document.body.dataset.y / 100) >= 20) {
        document.querySelector('#background-2').style.setProperty('--light', document.body.dataset.y / 100)
    }
    if (document.body.dataset.y >= 7930) {
        console.log('right')
        document.querySelector('#transport-type-car-contain-smog-1').style.setProperty('animation', 'smog-move 2s')
        document.querySelector('#transport-type-car-contain-smog-2').style.setProperty('animation', 'smog-move 2s')
        document.querySelector('#transport-type-car-contain-smog-3').style.setProperty('animation', 'smog-move 2s')
        document.querySelector('#transport-type-car-contain-smog-4').style.setProperty('animation', 'smog-move 2s')
        document.querySelector('#transport-type-car-contain-smog-5').style.setProperty('animation', 'smog-move 2s')
        document.querySelector('#transport-type-car-contain-smog-6').style.setProperty('animation', 'smog-move 2s')
    }
    if (document.body.getBoundingClientRect().width <= 460){
        if (document.getElementById("noti1").getBoundingClientRect().y <= 1000){
            document.querySelector('#noti1').style.setProperty('left', '16.5%')
        }
        if (document.getElementById("noti2").getBoundingClientRect().y <= 1000){
            document.querySelector('#noti2').style.setProperty('left', '15%')
        }
        if (document.getElementById("noti3").getBoundingClientRect().y <= 1000){
            document.querySelector('#noti3').style.setProperty('left', '15%')
        }
        if (document.getElementById("noti4").getBoundingClientRect().y <= 1000){
            document.querySelector('#noti4').style.setProperty('left', '15%')
        }
        if (document.getElementById("noti5").getBoundingClientRect().y <= 1000){
            document.querySelector('#noti5').style.setProperty('left', '15%')
        }
    } else {
        if (document.getElementById("noti1").getBoundingClientRect().y <= 650){
            document.querySelector('#noti1').style.setProperty('left', '26.5%')
        }
        if (document.getElementById("noti2").getBoundingClientRect().y <= 650){
            document.querySelector('#noti2').style.setProperty('left', '25%')
        }
        if (document.getElementById("noti3").getBoundingClientRect().y <= 650){
            document.querySelector('#noti3').style.setProperty('left', '25%')
        }
        if (document.getElementById("noti4").getBoundingClientRect().y <= 650){
            document.querySelector('#noti4').style.setProperty('left', '25%')
        }
        if (document.getElementById("noti5").getBoundingClientRect().y <= 650){
            document.querySelector('#noti5').style.setProperty('left', '25%')
        }
    }
}

function showPlacesOverlay(location_pin) {
    console.log(document.documentElement.clientWidth)
    if (document.documentElement.clientWidth <= 768) {
        location_name = `images/images/` + location_pin + "_phone.png"
    }
    else {
        location_name = `images/images/` + location_pin + "_desktop.png"
    }
    document.querySelector('.overlay').style.setProperty('background-image', `url(${location_name})`)
    document.querySelector('.overlay-bg').style.setProperty('top', '0%')
    document.querySelector('.overlay-bg').style.setProperty('background', '#000b')
    document.querySelector('body').style.overflowY = 'hidden';
}

function hidePlacesOverlay() {
    document.querySelector('.overlay-bg').style.setProperty('top', '-100%')
    document.querySelector('.overlay-bg').style.setProperty('background', '#0001')
    document.querySelector('body').style.overflowY = 'visible';
}

function showReceiptOverlay(receipt) {
    console.log(document.documentElement.clientWidth)
    if (document.documentElement.clientWidth <= 768) {
        receipt_name = `images/images/` + receipt + ".png"
    }
    else {
        receipt_name = `images/images/` + receipt + ".png"
    }
    document.querySelector('.receipt-overlay').style.setProperty('background-image', `url(${receipt_name})`)
    document.querySelector('.receipt-bg').style.setProperty('top', '0%')
    document.querySelector('.receipt-bg').style.setProperty('background', '#000b')
    document.querySelector('body').style.overflowY = 'hidden';
}

function hideReceiptOverlay() {
    document.querySelector('.receipt-bg').style.setProperty('top', '-100%')
    document.querySelector('.receipt-bg').style.setProperty('background', '#0001')
    document.querySelector('body').style.overflowY = 'visible';
}

