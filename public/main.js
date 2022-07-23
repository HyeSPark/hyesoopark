document.querySelector('.menu').onclick = function (e) {
    var menuList = document.querySelector('.menu_list');
    var menu = document.querySelector('.menu');
    menuList.classList.toggle('hide');
    menu.classList.toggle('open');
    e.preventDefault();
  }