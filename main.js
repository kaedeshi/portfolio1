'use strict';

{
  const hamburger = document.getElementById('hamburger');
  const openBorder1 = document.getElementById('open-border1');
  const openBorder2 = document.getElementById('open-border2');
  const openBorder3 = document.getElementById('open-border3');
  const openMenu = document.getElementById('open-menu');
  const mask = document.getElementById('mask');
  const menuLists = document.querySelectorAll('.mainvisual header #open-menu ul li')

  hamburger.addEventListener('click',() =>{
    openBorder1.classList.toggle('show');
    openBorder2.classList.toggle('show');
    openBorder3.classList.toggle('show');
    openMenu.classList.toggle('show');
    mask.classList.toggle('show');
  });
  mask.addEventListener('click',() =>{
    openBorder1.classList.toggle('show');
    openBorder2.classList.toggle('show');
    openBorder3.classList.toggle('show');
    openMenu.classList.toggle('show');
    mask.classList.toggle('show');
  });
  menuLists.forEach(menulist => {
    menulist.addEventListener('click',()=>{
      openBorder1.classList.toggle('show');
      openBorder2.classList.toggle('show');
      openBorder3.classList.toggle('show');
      openMenu.classList.toggle('show');
      mask.classList.toggle('show');
    });
  });
}