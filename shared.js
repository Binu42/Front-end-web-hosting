var backdrop = document.querySelector('.backdrop');
var planbtns = document.querySelectorAll('.plan button');
var modal =document.querySelector('.modal');
var toggbtn =document.querySelector('.toggle-button');
var mobnav = document.querySelector('.mobile-nav');
var mobnavneg = document.querySelector('.modal__action--negative');
var ctabutton = document.querySelector('.main-nav__item--cta');

for(var i = 0; i<planbtns.length; i++){
  planbtns[i].addEventListener('click', function() {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    backdrop.classList.add('open');
    modal.classList.add('open');
  });
}

backdrop.addEventListener('click', function() {
  // mobnav.style.display = 'none';
  mobnav.classList.remove('open');
  closemodel();
});

if(mobnavneg){
  mobnavneg.addEventListener('click', closemodel);
}

function closemodel(){
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  backdrop.classList.remove('open');
  if(modal){
    modal.classList.remove('open');
  }

}

toggbtn.addEventListener('click', function() {
  // mobnav.style.display = "block";
  // backdrop.style.display = "block";
  mobnav.classList.add('open');
  backdrop.classList.add('open');
});

ctabutton.addEventListener('animationstart', function(event){
  console.log("animation start", event);
});

ctabutton.addEventListener('animationend', function(event){
  console.log("animation end", event);
});

ctabutton.addEventListener('animationiteration', function(event){
  console.log("animation iteration", event);
});
