(function(module) {
  var repoController = {};

  repoController.reveal = function() {
    $('.tab-content').hide();
    $('#repos').fadeIn();
  };

  module.repoController = repoController;
})(window);
