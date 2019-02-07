// 5 sec visible
setTimeout
(function(){
  var cb = document.getElementById("checkbox1");
  if (cb.checked == false){
    document.getElementById('badge').style.visibility = "visible";
  } else {
    document.getElementById('badge').style.visibility = "hidden";
  }
},5000);
// end 5 sec visible

//checkbox checked
function save() {	
  var checkbox = document.getElementById("checkbox1");
  var text = document.getElementById("badge");
  localStorage.setItem("checkbox1", checkbox.checked);
}
//for loading
var checked = JSON.parse(localStorage.getItem("checkbox1"));
document.getElementById("checkbox1").checked = checked;
//end checkbox checked

//hideShow
document.getElementById("checkbox1").addEventListener("click", hideOrShow);
function hideOrShow() {
  var cb = document.getElementById("checkbox1");
  if (cb.checked == false){
    document.getElementById('badge').style.opacity = "1";
  } else {
    document.getElementById('badge').style.opacity = "0";
  }
}
//end hideShow

// arrows
m = appModule = {
  currentPosition: 0,
  notifications: ['I. The foundation of justice is good faith.', 'II. Art is born of the observation and investigation of nature.', 'III. There is no place more delightful than ones own fireside.'],
  notificationEl: null,
  init: function () {
    // initial value
    this.notificationEl = document.querySelector('.notification');
    this.notificationEl.innerHTML = this.notifications[0];
    // init event listeners		
    document.getElementById('leftArrow').addEventListener('click', this.changeNotification(true));
    document.getElementById('rightArrow').addEventListener('click', this.changeNotification());
  },

  // listener function
  changeNotification: function (left) {
    return left 

      ? func = event => {
      this.currentPosition--;
      if (this.currentPosition < 0) {
        this.currentPosition = this.notifications.length - 1;
      }
      this.notificationEl.innerHTML = this.notifications[this.currentPosition];
    }
    // right arrow
    : func = event => {
      this.currentPosition++;
      if (this.currentPosition === this.notifications.length) {
        this.currentPosition = 0;
      }
      this.notificationEl.innerHTML = this.notifications[this.currentPosition];
    }
  }
}
// start
m.init();
// end arrows

