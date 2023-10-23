 $(document).ready(function(){
    $('.hamburger').click(function(){
      var $this = $( this );
      if ($this.hasClass('is-active')){
        $('.fsmenu, .logo').removeClass('is-active');
        $('.fsmenu, .logo').addClass('close-menu');
        $("body").css("overflow-y", "auto");  

        setTimeout(function() {
          $('.fsmenu').css('z-index', -1);
        }, 500); 

      } else{
        $('.fsmenu, .logo').removeClass('close-menu');
        $('.fsmenu, .logo').addClass('is-active');
        $("body").css("overflow-y", "hidden");
        $('.fsmenu').css('z-index', 5);
      };
      $this.toggleClass('is-active');
    });
    $( ".fsmenu--list-element" ).hover(
      function() {
        $( this ).addClass('open');
        $( this ).removeClass('is-closing');
      }, function() {
        $( this ).removeClass('open');
        $( this ).addClass('is-closing');
       
      }
      );
  });
