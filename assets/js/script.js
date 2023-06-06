//_____________ALTERAR CORES BOTOES
let btn_content = document.querySelector(".btn-content");
let btn_icon = document.querySelector(".btn-icon");

function bgColorBtnOn() {
    btn_content.classList.toggle("bg-bronze");
    btn_icon.classList.toggle("bg-black");
};

function bgColorBtnOut() {
    btn_content.classList.remove("bg-bronze");
    btn_icon.classList.remove("bg-black");
};

//_____________DESTAQUE ITENS MENU
let menu_path = window.location.pathname.replace("/", "").replace(".html", "");
let menu = document.querySelectorAll(".menu li");

menu.forEach((item) => {
  let limpa_item = item.innerText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  if (limpa_item == menu_path || menu_path.match(limpa_item)) {
    item.id = "menu-ativo";
  }
});

//_____________MENU MOBILE

const btnMenu = document.querySelector('[data-menu="button"]');
const menuMob = document.querySelector('[data-menu="list"]');

function ativaMenu() {
  menuMob.classList.toggle("menuMobOn");
}

btnMenu.addEventListener("click", ativaMenu);

