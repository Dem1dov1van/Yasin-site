// slider
$(document).ready(function(){
   $('.slider').slick({
      dots: true,
      autoplay: true,
   })
})
// SlideToSection
$(document).ready(function(){
   $(".navigation__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
   });
});
   


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




