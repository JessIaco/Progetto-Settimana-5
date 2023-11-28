

//$(function() {
//   $(window).on("scroll", function() {
//      if($(window).scrollTop() > 500) {
//           $(".container1").addClass("active");
//        } else {
//          $(".container1").removeClass("active");
//        }
//   });
//});

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY;
  
    if (verticalScrollPx < 500) {
    document.querySelector("div.container1").style.backgroundColor = "#ffc017";
    } else if (verticalScrollPx > 500) {
        document.querySelector("div.container1").style.backgroundColor = 'white';
    } 
  });

  window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY;
  
    if (verticalScrollPx < 500) {
    document.querySelector("#bottone").style.backgroundColor = "black";
    } else if (verticalScrollPx > 500) {
        document.querySelector("#bottone").style.backgroundColor = 'green';
    } 
  });