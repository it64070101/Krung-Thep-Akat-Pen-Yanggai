let is_firstshow = true
var pos = -35;
function myMove() {
    
    var id = null;
    var elem = document.getElementById("choose-box");
    var target_chooseBox = document.getElementById("choosed");
    clearInterval(id);
    if (is_firstshow == true){
        is_firstshow = false
        id = setInterval(animation_show, 35);
        
    }
    else if (is_firstshow == false){
        console.log(pos)
        id = setInterval(animation_out, 35);
    }
    
  function animation_show() {
    if (pos == -7) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.marginBottom = pos + 'rem'; 
        }
    }
    console.log("hello")
    function animation_out() {
        if (pos == -36) {
          clearInterval(id);
          id = setInterval(animation_show, 35);
          target_chooseBox.style.borderBottom = '50px solid var(--skyTrain)';
          //น่าจะใส่ function เปลี่ยนสีและเปลี่ยนคำตรงนี้
        } else {
          pos--; 
          elem.style.marginBottom = pos + 'rem'; 
            }
        }
        console.log("bye")
        
}