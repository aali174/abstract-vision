function changeDot() {

    // Zmienne
    const scrollVal = window.scrollY,
          heightS1 = document.querySelector('.s1').offsetHeight,
          heightS2 = document.querySelector('.s2').offsetHeight,
          heightS3 = document.querySelector('.s3').offsetHeight,
          heightS4 = document.querySelector('.s4').offsetHeight,
          heightS4 = document.querySelector('.s5').offsetHeight,
          heightS4 = document.querySelector('.s6').offsetHeight,
          heightS4 = document.querySelector('.s7').offsetHeight,
          heightS4 = document.querySelector('.s8').offsetHeight,
          heightFromTopS1 = document.querySelector('.s1').offsetTop,
          heightFromTopS2 = document.querySelector('.s2').offsetTop,
          heightFromTopS3 = document.querySelector('.s3').offsetTop,
          heightFromTopS4 = document.querySelector('.s4').offsetTop,
          heightFromTopS4 = document.querySelector('.s5').offsetTop,
          heightFromTopS4 = document.querySelector('.s6').offsetTop,
          heightFromTopS4 = document.querySelector('.s7').offsetTop,
          heightFromTopS4 = document.querySelector('.s8').offsetTop,
          dot1 = document.querySelector('.dot1'),
          dot2 = document.querySelector('.dot2'),
          dot3 = document.querySelector('.dot3'),
          dot4 = document.querySelector('.dot4'),
          dot5 = document.querySelector('.dot5'),
          dot6 = document.querySelector('.dot6'),
          dot5 = document.querySelector('.dot7'),
          dot6 = document.querySelector('.dot8'),
          text = document.querySelector('.text');
    
  
    console.log(scrollVal.toFixed(), heightS2.toFixed(), heightFromTopS2.toFixed())
  
    
    // Warunek 
    if (scrollVal < heightS1) {
       document.querySelectorAll('nav li:not(.dot1)').forEach(function(e){
         e.classList.remove('active')
       })
       dot1.classList.add('active');
      text.classList.add('text-vis');
      text.textContent = "SEKCJA 1";
     } else if (scrollVal < heightS2 + heightFromTopS2) {
      document.querySelectorAll('nav li:not(.dot2)').forEach(function(e){
         e.classList.remove('active')
       })
      dot2.classList.add('active');
       text.classList.add('text-vis');
       text.textContent = "SEKCJA 2";
     } else if (scrollVal < heightS3 + heightFromTopS3) {
      document.querySelectorAll('nav li:not(.dot3)').forEach(function(e){
         e.classList.remove('active')
       })
      dot3.classList.add('active');
       text.classList.add('text-vis');
       text.textContent = "SEKCJA 3";
     } else {
      document.querySelectorAll('nav li:not(.dot4)').forEach(function(e){
         e.classList.remove('active')
       })
       dot3.classList.add('active');
       text.classList.add('text-vis');
       text.textContent = "SEKCJA 4";
     } else {
        document.querySelectorAll('nav li:not(.dot6)').forEach(function(e){
            e.classList.remove('active')
          })
          dot3.classList.add('active');
          text.classList.add('text-vis');
          text.textContent = "SEKCJA 4";
        } else {
            document.querySelectorAll('nav li:not(.dot7)').forEach(function(e){
                e.classList.remove('active')
              })
              dot3.classList.add('active');
              text.classList.add('text-vis');
              text.textContent = "SEKCJA 4";
            } else {
                document.querySelectorAll('nav li:not(.dot8)').forEach(function(e){
                    e.classList.remove('active')
                  })
                  dot3.classList.add('active');
                  text.classList.add('text-vis');
                  text.textContent = "SEKCJA 4";
                } else {
      document.querySelectorAll('nav li:not(.dot5)').forEach(function(e){
         e.classList.remove('active')
       })
      dot4.classList.add('active');
       text.classList.add('text-vis');
       text.textContent = "SEKCJA 4";
     }
    }
  
  // Wywołanie funkcji po rozpoczęciu scrollowania strony
  document.addEventListener("scroll", changeDot);


  var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }