
let btn_content = document.querySelector(".btn-content");
let btn_icon = document.querySelector(".btn-icon");

function bgColorBtnOn(){
  btn_content.classList.toggle("bg-bronze");
  btn_icon.classList.toggle("bg-black");
}

function bgColorBtnOut(){
  btn_content.classList.remove("bg-bronze");
  btn_icon.classList.remove("bg-black");
 }