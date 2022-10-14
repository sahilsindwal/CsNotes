let arrow = document.querySelector('.arrow');
let morecourse = document.querySelector('.morecourse');
arrow.addEventListener('click', () =>{
    arrow.classList.toggle('bx-chevron-right');
    arrow.classList.toggle('bx-chevron-down');
    var displaySetting = morecourse.style.display;

  if (displaySetting == 'block') {
      // clock is visible. hide it
      morecourse.style.display = 'none';
    }
    else {
      // clock is hidden. show it
      morecourse.style.display = 'block';
    }
  });