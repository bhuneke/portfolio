(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    $('.tab-content').hide();
    $('#home').fadeIn();
  };

  module.homeController = homeController;
})(window);
