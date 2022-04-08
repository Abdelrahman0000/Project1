$(document).ready(
    
    
    
        $('.header').animate({ opacity: '1'},1000),
        
        $('.mybf').animate({left:0},1000),
        $('.mybf').animate({top:0},1000),
        $(window).scroll(function() {

                    if ($(window).scrollTop()+1000 > $('.info').offset().top) {
               $('.big1').animate({top:0},1000)
               $('.text1').animate({left:0},1000)
               $('.btn1').animate({bottom:0},1000)


                      }
                      if ($(window).scrollTop()+700 > $('.section').offset().top) {
                        $('.sec1').animate({top:0},1000)
                        $('.sec2').animate({bottom:0},1000)
         
         
                               }
                      
                //      }


     })
        
     
)    