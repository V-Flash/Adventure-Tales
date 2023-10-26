$(document).ready(function() {
   $(window).on("orientationchange", function(event) {
       
       var orientation = window.orientation;

       if (orientation === 90 || orientation === -90) {

           $(".title").addClass("landscape-title");
           $(".tag").addClass("landscape-tag");
           $(".tag-line").addClass("landscape-tag-line");
       } 

       else {
           $(".title").removeClass("landscape-title");
           $(".tag").removeClass("landscape-tag");
           $(".tag-line").removeClass("landscape-tag-line");
       }
   });
});
