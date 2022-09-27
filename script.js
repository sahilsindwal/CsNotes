let progress = document.getElementById('progressbar');

        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function (){

            let progressHeight = ( window.pageYOffset / 
            totalHeight) * 100;
            progress.style.height = progressHeight + "%";
            
        }
        

 // this code is used for menubar
let bar = document.querySelector('#bar');
let menu = document.querySelector('.java_menu')
bar.addEventListener('click', () => {
    bar.classList.toggle("close");
    menu.classList.toggle("mc");
    
});

