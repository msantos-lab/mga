
let btn_content = document.querySelector(".btn-content");
let btn_icon = document.querySelector(".btn-icon");

function bgColorBtnOn(){
  btn_content.classList.toggle("bg-bronze");
  btn_icon.classList.toggle("bg-black");
};

function bgColorBtnOut(){
  btn_content.classList.remove("bg-bronze");
  btn_icon.classList.remove("bg-black");
 };


 let menu_path = window.location.pathname.replace("/", "").replace(".html", "");
 let menu = document.querySelectorAll(".menu li");
//  console.log(menu_path.match("exposicoes")[0]);

 menu.forEach((item) =>{
  console.log(item);

  let limpa_item = item.innerText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  console.log("match " + menu_path.match(limpa_item));

  if(limpa_item == menu_path || menu_path.match(limpa_item)){
    item.id = "menu-ativo";
  }
 });

//              MENU

const btnMenu = document.querySelector('[data-menu="button"]');
const menuMob = document.querySelector('[data-menu="list"]');
console.log(menuMob)

function ativaMenu(){
  menuMob.classList.toggle("menuMobOn");
}

btnMenu.addEventListener("click", ativaMenu);

