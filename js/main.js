(function(){
  var b=document.querySelector('.burger'),n=document.querySelector('.nav');
  if(b&&n){b.addEventListener('click',function(){n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))});}
  var m=document.querySelector('.marquee');
  if(m){m.innerHTML=m.innerHTML+m.innerHTML;}
})();
