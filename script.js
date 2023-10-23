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
    // Noti check and move
    let notitop1 = document.querySelector('#noti1').getBoundingClientRect().top
    let  notitopWithOffset1 = notitop1 - parseInt(document.body.dataset.h)
    if (notitopWithOffset1 < 0) {
        document.querySelector('#noti1').style.setProperty('--movenoti1', 1)
    }
    let notitop2 = document.querySelector('#noti2').getBoundingClientRect().top
    let  notitopWithOffset2 = notitop2 - parseInt(document.body.dataset.h)
    if (notitopWithOffset2 < 0) {
        document.querySelector('#noti2').style.setProperty('--movenoti2', 1)
    }
    let notitop3 = document.querySelector('#noti3').getBoundingClientRect().top
    let  notitopWithOffset3 = notitop3 - parseInt(document.body.dataset.h)
    if (notitopWithOffset3 < 0) {
        document.querySelector('#noti3').style.setProperty('--movenoti3', 1)
    }
    let notitop4 = document.querySelector('#noti4').getBoundingClientRect().top
    let  notitopWithOffset4 = notitop4 - parseInt(document.body.dataset.h)
    if (notitopWithOffset4 < 0) {
        document.querySelector('#noti4').style.setProperty('--movenoti4', 1)
    }
    let notitop5 = document.querySelector('#noti5').getBoundingClientRect().top
    let  notitopWithOffset5 = notitop5 - parseInt(document.body.dataset.h)
    if (notitopWithOffset5 < 0) {
        document.querySelector('#noti5').style.setProperty('--movenoti5', 1)
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
    document.getElementById("receipt-bg-img").src=receipt_name;
    document.querySelector('.receipt-bg').style.setProperty('top', '0%')
    document.querySelector('.receipt-bg').style.setProperty('background', '#000b')
    document.querySelector('body').style.overflowY = 'hidden';
}

function hideReceiptOverlay() {
    document.querySelector('.receipt-bg').style.setProperty('top', '-100%')
    document.querySelector('.receipt-bg').style.setProperty('background', '#0001')
    document.querySelector('body').style.overflowY = 'visible';
}

function setRandomAQInumber(element){
    const setAQI = document.getElementsByClassName("blinking-text");
    for(let j of setAQI){
        const min = 50;
        const max = 120;
        const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
        element.innerHTML = `<h4>AQI</h4><span class="aqi-show">${randomInteger}</span>`;
    }
  }
  
  
  function updatePositions(animationNum) {
    const textElements = document.querySelectorAll('.animation_num_' + animationNum);
   
    textElements.forEach((element) => {
        setRandomAQInumber(element);
    });
  }
  
  
  // Initial positioning for each animation group
  updatePositions(1);
  updatePositions(2);
  updatePositions(3);
  updatePositions(4);
  
  // Periodically update positions for each animation group
  setInterval(() => updatePositions(1), 2000);
  setInterval(() => updatePositions(2), 3000);
  setInterval(() => updatePositions(3), 2500);
  setInterval(() => updatePositions(4), 4000);

  
