let is_firstshow = true
let is_animation_playing = false; // Flag to track animation status
var pos = -35;
var oldTarget_name = "";
var oldTarget_num = 88;

window.onload = function() {
  setTimeout(function() {
      window.scrollTo(0, 0);
  }, 1); 
}
function myMove(num) {
    if (is_animation_playing) {
      return; // Don't start a new animation if one is already playing
  }
    var id = null;
    var elem = document.getElementById("choose-box");
    var target_chooseBox = document.getElementById("choosed");
    
    var target_name = clean_vehicle[num].name
    var target_details = clean_vehicle[num].details
    var target_price = clean_vehicle[num].price
    var target_time = clean_vehicle[num].time
    var target_color = clean_vehicle[num].color
    var target_text = clean_vehicle[num].colorText
    var target_nameEN = clean_vehicle[num].nameEN
    var target_image = clean_vehicle[num].image

    var span_chooseBox = document.getElementById("chooseBox");
    var span_chooseBox_details = document.getElementById("chooseBox_details");
    var span_chooseBox_price = document.getElementById("chooseBox_price");
    var span_chooseBox_time = document.getElementById("chooseBox_time");
    var image_choose = document.getElementById("content-cleanVehicle-image");
    // Set the animation flag to true to disable clicks during animation
    is_animation_playing = true;

    clearInterval(id);
    if (is_firstshow == true){
        textshow();
        changeColor();
        saveoldvalue();
        is_firstshow = false
        id = setInterval(animation_show_onetime, 35);
        
    }
    else if (is_firstshow == false){
        id = setInterval(animation_out, 35);
    }
  function animation_show_onetime() {
      if (pos == -7) {
        clearInterval(id);
        is_animation_playing = false;
      } else {
        pos++; 
        elem.style.marginTop = pos + 'rem'; 
          }
      }
  function animation_show() {
    if (pos == -7) {
      clearInterval(id);
      is_animation_playing = false;
    } else {
      pos++; 
      elem.style.marginTop = pos + 'rem'; 
        }
    }

    function animation_out() {
        if (pos == -36) {
          clearInterval(id);
          id = setInterval(animation_show, 35);

          if (oldTarget_num != 88){
            lodeoldvalue();
          }

          textshow();
          changeColor();
          saveoldvalue();

        } else {
          pos--; 
          elem.style.marginTop = pos + 'rem'; 
            }
        }
      function textshow() {
          span_chooseBox.innerText = target_name;
          span_chooseBox_details.innerText = target_details;
          span_chooseBox_price.innerText = target_price;
          span_chooseBox_time.innerText = target_time;
          image_choose.style.background = `url(${target_image})`;
          image_choose.style.backgroundSize = "100% 80%";
			    image_choose.style.backgroundRepeat = 'no-repeat';
      }
      function changeColor() {
          document.documentElement.style.setProperty('--textchoose', target_text);
          document.documentElement.style.setProperty('--choosing', target_color);
          document.documentElement.style.setProperty('--showing', '100%');
          target_chooseBox.style.borderBottom = '50px solid'+ target_color;
          document.getElementById('choose_'+target_nameEN).style.color = target_color;
      }
      function saveoldvalue(){
        oldTarget_name = target_nameEN;
        oldTarget_num = num;
      }
      function lodeoldvalue(){
        var oldTarget_text = clean_vehicle[oldTarget_num].colorText;
        document.getElementById('choose_'+oldTarget_name).style.color = oldTarget_text;
      }
}
var checkRunScroll = false;
// Function to run when scrolling through the 'content-pros' class
function handleScroll() {
  const contentPros = document.querySelector('.content-pros');
  const contentProsTop = contentPros.offsetTop;
  const contentProsBottom = contentProsTop + contentPros.clientHeight;
  const scrollY = window.scrollY || window.pageYOffset;

  // Check if the 'content-pros' section is in the viewport
  if (scrollY >= contentProsTop && scrollY <= contentProsBottom && checkRunScroll == false) {
      // Your code to run when scrolling through 'content-pros' goes here
      console.log('Scrolled through .content-pros');
      checkRunScroll = true;
  }
}

// Add an event listener for the 'scroll' event
window.addEventListener('scroll', handleScroll);




function setRandomPosition(element) {  
  var maxWidth = document.querySelector('.aqi-grid-pros').clientWidth;
  var maxHeight = document.querySelector('.aqi-grid-pros').clientHeight-50;
  if (element.classList.contains('animation_num_1')) {
      maxWidth = 800;
      maxHeight = 300;
  }
  if (element.classList.contains('animation_num_2')) {
    maxWidth = 1200;
    maxHeight = 300;
}
if (element.classList.contains('animation_num_4')) {
  maxWidth = 1200;
  maxHeight = 200;
}

  const left = Math.random() * (maxWidth - element.clientWidth) + 'px';
  const top = Math.random() * (maxHeight - element.clientHeight) + 'px';
  
  element.style.left = left;
  element.style.top = top;
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
      setRandomPosition(element);
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

// share link  
const Link = 'https://youtu.be/dQw4w9WgXcQ?si=9jgJ9d1KyPGAkDZ6'; // Replace with your YouTube video URL
var currentURL = window.location.origin; // ได้ URL ของ origin (ตัวอย่าง: https://www.yourwebsite.com)
var urlToShare = currentURL + '/index.html'; // ผสานกับ path ของ index.html
function shareOnFacebook() {
  // Create the Facebook share URL with the YouTube link
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
  // Open a new window or tab with the share dialog
  window.open(facebookShareURL, '_blank');
}

function shareOnTwitter() {

  // Create the Facebook share URL with the YouTube link
  const twitterURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}`;

  // Open a new window or tab with the share dialog
  window.open(twitterURL, '_blank');
}

function shareOnLine() {

  // Create the Facebook share URL with the YouTube link
  const lineShareURL = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(urlToShare)}`;

  // Open a new window or tab with the share dialog
  window.open(lineShareURL, '_blank');
}
function shareCopyLink() {

  const textArea = document.createElement('textarea');
  textArea.value = urlToShare;

  // Append the textarea to the document
  document.body.appendChild(textArea);

  // Select the text in the textarea
  textArea.select();
  textArea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to the clipboard
  document.execCommand('copy');

  // Remove the textarea from the document
  document.body.removeChild(textArea);

  // Inform the user that the link has been copied
  alert('YouTube link has been copied to the clipboard');
}
