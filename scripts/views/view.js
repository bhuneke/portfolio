'use strict';
(function(module) {
  var view = {};
  view.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
  };

  // view.handleMainNav = function () {
  //   $('.main-nav').on('click', '.tab', function() {
  //     var whichTab = $(this).attr('data-content');
  //     $('.tab-content').hide();
  //     $('#' + whichTab).fadeIn();
  //   });
  // };

  view.handleLoad = function () {
    $('.tab-content').hide();
    $('#home').fadeIn();
  };

  //view.handleMainNav();
  view.handleLoad();

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
    view.allCategories().forEach(function(category){
      var optionTag = '<option value="' + category + '">' + category + '</option>';
      if ($('#category-filter option[value="' + category + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    });
  };

  view.renderIndexPage = function() {
    Article.articles.forEach(function(a) {
      $('#blog').append(a.toHtml($('#article-template')));
    });
    view.populateFilters();
    view.handleCategoryFilter();
    //view.handleMainNav();
  };
  module.view = view;
})(window);

Article.fetchAll(view.renderIndexPage);
