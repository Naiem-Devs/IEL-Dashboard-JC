(function($) {
  "use strict";

  $(".collaps_btn").click(function(){
    $(".side_nav").toggleClass("active");
  });

  $(".chat_btn").click(function(){
    $(".right_side").toggleClass("right_side_active");
  });


      // Table top Fixed
      var tableOffset = $("#table-1").offset().top;
      var $header = $("#table-1 > thead").clone();
      var $fixedHeader = $("#table-header-fixed").append($header);
    
      $(window).bind("scroll", function() {
      var offset = $(this).scrollTop();
    
      if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
          $fixedHeader.show();
      } else if (offset < tableOffset) {
          $fixedHeader.hide();
      }
      });




      
})(jQuery);
