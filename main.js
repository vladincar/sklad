//remove top bar
const removeBar = document.getElementById('removeBar');
const topPannel = document.querySelector('.top-pannel');

removeBar.addEventListener('click',()=>{
    topPannel.classList.toggle('dissapear')
}) 

//mobile menu
const menuIcon=document.querySelector('#menuIcon');
const menuBcg=document.querySelector('.menuBcg');
const navUl=document.querySelector('nav').querySelector('ul');


menuIcon.addEventListener('click',function(){
    menuBcg.classList.toggle('menuBcgOpen');
    navUl.classList.toggle('openedUl');
    topPannel.classList.toggle('top-pannel-menu');
}) 