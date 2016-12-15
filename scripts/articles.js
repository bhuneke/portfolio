'use strict';

var articles = [];

function Article (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('.article-heading').html(this.title);
  $newArticle.attr('data-category', this.category);
  $newArticle.find('time[datetime]').attr('date', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newArticle.find('section.article-body').html(this.body);

  $newArticle.removeAttr('class');

  return $newArticle;
};

blogArticles.sort(function(curElem, nextElem) {
  return (new Date(nextElem.publishedOn)) - (new Date(curElem.publishedOn));
});

blogArticles.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a) {
  $('#blog').append(a.toHtml());
});
