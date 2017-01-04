(function(module) {
  var repoController = {};

  repoController.reveal = function() {
    $('.tabcontent').hide();
    $('#repos').show();
  };

  module.repoController = repoController;
}(window));
