(function(module) {
  var blogController = {};

  blogController.reveal = function() {
    $('.tab-content').hide();
    $('#blog').fadeIn();
  };

  module.blogController = blogController;
})(window);
