// slider
$(document).ready(function(){
   $('.slider').slick({
      dots: true,
      autoplay: true,
   })
})

// paralax

$('.history').on('mousemove', (e)=>{
   const x = e.pageX / $(window).width();
   const y = e.pageY / $(window).height();

   $('.wrap-body__graphic').css('transform', 
   'translate(' + x * 5 + 'px, ' + y * 5 + 'px)'
   );
});

$('.history').on('mousemove', (e)=>{
   const x = e.pageX / $(window).width();
   const y = e.pageY / $(window).height();

   $('.parralax__circle--dad').css('transform', 
   'translate(-' + x * 7 + 'px,-' + y * 7 + 'px)'
   );
});

$('.navigation__link').click()




