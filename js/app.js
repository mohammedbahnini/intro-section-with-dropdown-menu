const menu_items = document.querySelectorAll('.nav-list .nav-item');
const menu_close = document.querySelector('.menu-close');
const menu_open = document.querySelector('.menu-open');
const sidebar = document.querySelector('.nav');
const body = document.querySelector('body');

menu_items.forEach( item =>{
    item.addEventListener( 'click' , (e)=>{
        const sub_menu = item.querySelector('.sub-nav');
        const icon = item.querySelector('i');
        sub_menu.classList.toggle('open');
        icon.style.transform = sub_menu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});
menu_open.addEventListener('click',(e)=>{
    sidebar.classList.add('open');
    body.style.overflow='hidden';
    

});
menu_close.addEventListener('click',(e)=>{
    sidebar.classList.remove('open');
    body.style.overflow='auto';
});