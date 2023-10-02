let is_firstshow = true
let is_animation_playing = false; // Flag to track animation status
var pos = -35;
var oldTarget_name = "";
var oldTarget_num = 88;
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
        elem.style.marginBottom = pos + 'rem'; 
          }
      }
  function animation_show() {
    if (pos == -7) {
      clearInterval(id);
      is_animation_playing = false;
    } else {
      pos++; 
      elem.style.marginBottom = pos + 'rem'; 
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
          elem.style.marginBottom = pos + 'rem'; 
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

