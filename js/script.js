
$(window).scroll(function(){
    var sticky = $('.head')
        scroll = $(window).scrollTop();
  
    if (scroll >= 400) sticky.addClass('fixed');

    else sticky.removeClass('fixed');
   

  });
  $(window).scroll(function(){
    var hidden = $('.arro-to')
        scroll = $(window).scrollTop();
  
    if (scroll >= 400) hidden.addClass('display-b');

    else hidden.removeClass('display-b');
   

  });

  let blg = 0;
  var hidden = $('.arro-to')
  $(hidden).click(function(){
         $(window).scrollTop(0,0);
        
      
   

  });





  
