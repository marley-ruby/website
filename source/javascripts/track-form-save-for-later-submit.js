//= require track-form

(function($){
  $('.trackable-form').on("submit", function(){
      trackForm.saveForLater($(this).serializeArray(), window.localStorage);
    }
  })(jQuery);
