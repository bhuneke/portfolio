'use strict';
(function(module) {
  var view = {};

  var render = function(article) {
    var template = Handlebars.compile($('#blog-template').text());

    article.daysAgo = parseInt((new Date() - new Date(article.publishedOn)) / 60 / 60 / 24 / 1000);
    article.publishedStatus = article.daysAgo + ' days ago';

    return template(article);
  };

  view.allCategories = function(a) {
    return Article.articles.map(function(article){
      return article.category;
    })
    .reduce(function(acc, curr){
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  };

  view.populateFilters = function() {
    var options,
      template = Handlebars.compile($('#category-filter-template').text());

    options = view.allCategories().map(function(category) {
      return template({category: category});
    });

    if ($('#category-filter-template').length < 2) {
      $('#category-filter').empty().append(options);
    };
  };

  view.handleCategoryFilter = function() {
    $('#filters').one('change', 'select', function() {
      var resource = this.id.replace('-filter', '');
      page('/' + resource + '/' + $(this).val().replace(/\W+/g, '+'));
    });
  };

  view.index = function(articles) {
    $('#blog').show().siblings().hide();

    $('#blog article').remove();
    articles.forEach(function(a) {
      $('#blog').append(render(a));
    });

    view.populateFilters();
    view.handleCategoryFilter();
  };

  module.view = view;
})(window);
