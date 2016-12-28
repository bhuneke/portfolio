'use strict';
(function(module) {
  function Article (opts) {
    this.title = opts.title;
    this.category = opts.category;
    this.publishedOn = opts.publishedOn;
    this.body = opts.body;
  }

  Article.articles = [];

  Article.prototype.toHtml = function() {
    var source = $('#blog-template').html();
    var template = Handlebars.compile(source);

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
    this.publishedStatus = this.daysAgo + ' days ago';

    var html = template(this);
    return html;
  };

  Article.loadAll = function(passedData) {
    Article.articles = passedData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    }).map(function(ele){
      return new Article(ele);
    });
  };

  Article.fetchAll = function(nextFunction) {
    if (localStorage.blogArticles) {
      $.ajax({
        type: 'HEAD',
        url: '/data/blogArticles.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Article.getAll(nextFunction);
          } else {
            Article.loadAll(JSON.parse(localStorage.blogArticles));
            nextFunction();
          }
        }
      });
    } else {
      Article.getAll(nextFunction);
    }
  };

  Article.getAll = function(nextFunction) {
    $.getJSON('/data/blogArticles.json', function(responseData) {
      Article.loadAll(responseData);
      localStorage.blogArticles = JSON.stringify(responseData);
      nextFunction();
    });
  };


  module.Article = Article;
})(window);
