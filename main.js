var slideCounter=0;
showslides();

function showslides() {
  var i;
  var slides=document.getElementsByClassName("slides");
  var dot=document.getElementsByClassName("dot");
  for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  slideCounter++;
  if(slideCounter>slides.length){
    slideCounter=1
  }
  for (i = 0; i< dot.length; i++) {
     dot[i].className=dot[i].className.replace("active","");
   }
  slides[slideCounter-1].style.display="block";
  dot[slideCounter-1].className += " active";
  setTimeout(showslides,2000);
}
