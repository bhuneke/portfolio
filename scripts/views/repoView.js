(function(module) {
  var repoView = {};

  var repoCompiler = function(a) {
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    var html = template(a);
    return html;
  };

  repoView.renderRepos = function () {
    $('#repos ul').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);
}(window));
