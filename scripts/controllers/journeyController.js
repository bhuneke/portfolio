(function(module) {
  var journeyController = {};

  journeyController.reveal = function() {
    $('.tab-content').hide();
    $('#journey').fadeIn();
  };

  module.journeyController = journeyController;
})(window);
