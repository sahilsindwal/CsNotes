// this code is used for menubar
let bar = document.querySelector('#bar');
let menu = document.querySelector('.java_menu')
bar.addEventListener('click', () => {
    bar.classList.toggle("close");
    menu.classList.toggle("mc");

});


